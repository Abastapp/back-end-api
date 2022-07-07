import { Container } from 'inversify'
import { addLogger } from './addLogger'

type Maker = (container: Container) => void;

export function makeAll (container: Container, makers: Maker[]) {
  const logger = addLogger(container)

  try {
    makers.forEach(maker => {
      logger.debug('[ioc] - Making something')
      maker(container)
      logger.debug('[ioc] - Finished something')
    })
  } catch (error) {
    logger.error(error, 'Missing dependency')
    throw error
  }
}
