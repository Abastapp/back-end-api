import { CreateGasStationController } from '@infra/controllers/gasStation/create'
import { HealthController } from '@infra/controllers/health'
import { AuthController } from '@infra/controllers/user/auth'
import { CreateUserController } from '@infra/controllers/user/create'
import { FindUserController } from '@infra/controllers/user/find'
import { Container } from 'inversify'

export const makeControllers = (container: Container) => {
  container.bind(HealthController).toSelf()
  container.bind(CreateUserController).toSelf()
  container.bind(FindUserController).toSelf()
  container.bind(CreateGasStationController).toSelf()
  container.bind(AuthController).toSelf()
}
