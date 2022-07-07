import { Container } from 'inversify'
import { infra } from '@infra/common/ioc'

export const makeEnvironment = (container: Container) => {
  container
    .bind(infra.environment.port)
    .toConstantValue(process.env.PORT || 3000)
}
