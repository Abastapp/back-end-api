import { Container } from 'inversify'
import { domain } from '@domain/common/ioc'
import { domainBinder } from '@infra/helpers/domainBinder'
import { infra } from '@infra/common/ioc'
import { CreateUserService } from '@domain/services/user/create'

export const makeServices = (container: Container) => {
  domainBinder(
    container,
    domain.services.user.create,
    CreateUserService,
    [
      infra.repositories.user.store
    ]
  )    
}
