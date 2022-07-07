import { HealthController } from '@infra/controllers/health'
import { Container } from 'inversify'

export const makeControllers = (container: Container) => {
  container.bind(HealthController).toSelf()
}
