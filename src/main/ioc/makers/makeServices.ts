import { Container } from 'inversify'
import { domain } from '@domain/common/ioc'
import { domainBinder } from '@infra/helpers/domainBinder'
import { infra } from '@infra/common/ioc'
import { CreateUserService } from '@domain/services/user/create'
import { FindUserService } from '@domain/services/user/find'
import { CreateGasStationService } from '@domain/services/gasStation/create'
import { LoginUserService } from '@domain/services/user/login'
import { AuthenticationService } from '@domain/services/authentication/authentication'

export const makeServices = (container: Container) => {
  domainBinder(
    container,
    domain.services.user.create,
    CreateUserService,
    [
      infra.repositories.user.store
    ]
  )
  domainBinder(
    container,
    domain.services.user.find,
    FindUserService,
    [
      infra.repositories.user.find
    ]
  )
  domainBinder(
    container,
    domain.services.gasStation.create,
    CreateGasStationService,
    [
      infra.repositories.gasStations.store
    ]
  )
  domainBinder(
    container,
    domain.services.user.login,
    LoginUserService,
    [
      infra.repositories.user.findBy,
      infra.repositories.token.store,
      infra.environment.secret
    ]
  )
  domainBinder(
    container,
    domain.services.authetication.execute,
    AuthenticationService,
    [
      infra.repositories.user.findBy,
      infra.environment.secret
    ]
  )
}
