import { Container } from 'inversify'
import { infra } from '@infra/common/ioc'
import { CreateUserRepository } from '@infra/repositories/user/create'

export const makeRepositories = (container: Container): void => {
  container
    .bind(infra.repositories.user.store)
    .to(CreateUserRepository)
}
