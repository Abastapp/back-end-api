import { Container } from 'inversify'
import { infra } from '@infra/common/ioc'
import { CreateUserRepository } from '@infra/repositories/user/create'
import { FindUserRepository } from '@infra/repositories/user/find'

export const makeRepositories = (container: Container): void => {
  container
    .bind(infra.repositories.user.store)
    .to(CreateUserRepository)
  container
    .bind(infra.repositories.user.find)
    .to(FindUserRepository)
}
