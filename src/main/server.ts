import 'dotenv/config'
import 'reflect-metadata'
import { ExpressApp } from '@infra/apps/express'
;(async () => {
  const app = new ExpressApp()
  await app.listen()
})()
