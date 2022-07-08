import { Container } from 'inversify'
import { infra } from '@infra/common/ioc'
import { MongoDb } from '@infra/providers/mongodb'

export const makeConnectors = (container: Container) => {
  container.bind(infra.connectors.mongodb).to(MongoDb)
}
