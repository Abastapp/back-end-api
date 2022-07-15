import { Container } from 'inversify'
import { infra } from '@infra/common/ioc'
import { CreateUserRepository } from '@infra/repositories/user/store'
import { FindUserRepository } from '@infra/repositories/user/find'
import { CreateGasStationRepository } from '@infra/repositories/gasStation/store'

export const makeRepositories = (container: Container): void => {
  container
    .bind(infra.repositories.user.store)
    .to(CreateUserRepository)
  container
    .bind(infra.repositories.user.find)
    .to(FindUserRepository)
  container
    .bind(infra.repositories.gasStations.store)
    .to(CreateGasStationRepository)
}
