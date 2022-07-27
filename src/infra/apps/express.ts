import express, { Application } from 'express'
import { Container } from 'inversify'
import { MongoDb } from '@infra/providers/mongodb'
import { InversifyExpressServer } from 'inversify-express-utils'
import { Application as BaseApplication } from '@infra/helpers/abstractApplication'
import { infra } from '@infra/common/ioc'
import { Logger } from 'pino'
import { makeAbastapp } from '@main/ioc/makers/makeAbastapp'
import { configureGlobalHandler } from '@infra/helpers/errorHandler'

export class ExpressApp extends BaseApplication {
  private _application!: Application
  private readonly name = 'express'

  public get application (): Application {
    return this._application
  }

  public get depsContainer (): Container {
    return this.container
  }

  constructor () {
    super({})
  }

  configureServices (depsContainer: Container): void {
    makeAbastapp(depsContainer)
  }

  async setup () {
    const server = new InversifyExpressServer(this.container)
    // eslint-disable-next-line no-unused-expressions
    this.container.get<MongoDb>(infra.connectors.mongodb).connection
    const logger = this.container.get<Logger>(infra.providers.logger)
    server.setConfig((app) => {
      app.use(express.json())
    })

    server.setErrorConfig((app) => configureGlobalHandler(app, logger))

    this._application = server.build()
  }

  async listen (): Promise<void> {
    const port = this.container.get<number>(infra.environment.port)
    const logger = this.container.get<Logger>(infra.providers.logger)

    this.application.listen(port, () => {
      logger.info(
        `[${this.name}] server is running on http://localhost:${port}`
      )
    })
  }
}
