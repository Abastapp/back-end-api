import { Container } from 'inversify'
import { makeAll } from '@main/ioc/common/makeAll'
import { makeEnvironment } from '@main/ioc/makers/makeEnvironment'
import { makeControllers } from './makeControllers'
import { makeProviders } from './makeProviders'
import { makeUsecases } from './makeUsecases'
import { makeRepositories } from './makeRepositories'
import { makeServices } from './makeServices'

export function makeAbastapp (container: Container) {
  const makers = [
    makeEnvironment,
    makeControllers,
    makeProviders,
    makeRepositories,
    makeServices,
    makeUsecases
  ]

  makeAll(container, makers)
}
