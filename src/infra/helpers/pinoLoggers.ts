import { inject, injectable } from 'inversify'
import { Logger } from 'pino'
import { Logger as LoggerInterface } from '@domain/helpers/logger'
import { infra } from '@infra/common/ioc'

@injectable()
export class PinoLoggerHelper implements LoggerInterface {
  constructor (
    @inject(infra.providers.logger)
    private readonly logger: Logger
  ) {}

  debug (msg: string): void {
    this.logger.debug(msg)
  }

  info (msg: string): void {
    this.logger.info(msg)
  }

  error (msg: string): void {
    this.logger.warn(msg)
  }

  warn (msg: string): void {
    this.logger.warn(msg)
  }
}
