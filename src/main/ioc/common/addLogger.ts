import pino, { Logger } from 'pino'
import { Container } from 'inversify'

import { infra } from '@infra/common/ioc'

export const addLogger = (container: Container) => {
  const logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    transport: {
      target: 'pino-pretty'
    }
  })

  container.bind<Logger>(infra.providers.logger).toConstantValue(logger)

  return logger
}
