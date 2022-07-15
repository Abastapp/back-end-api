import { Container } from 'inversify'
import { infra } from '@infra/common/ioc'

export const makeEnvironment = (container: Container) => {
  container
    .bind(infra.environment.port)
    .toConstantValue(process.env.PORT || 3000)
  container
    .bind(infra.environment.databaseUrl)
    .toConstantValue(process.env.MONGODB_URL || 'http://localhost:27017')
  container
    .bind(infra.environment.secret)
    .toConstantValue(process.env.SECRET || 'GodJarssin')
}
