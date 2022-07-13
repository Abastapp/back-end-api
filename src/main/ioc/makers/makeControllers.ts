import { HealthController } from '@infra/controllers/health'
import { CreateUserController } from '@infra/controllers/user/create'
import { FindUserController } from '@infra/controllers/user/find'
import { Container } from 'inversify'

export const makeControllers = (container: Container) => {
  container.bind(HealthController).toSelf(),
  container.bind(CreateUserController).toSelf()
  container.bind(FindUserController).toSelf()
}
