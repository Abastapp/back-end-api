import { infra } from '@infra/common/ioc'
import { inject, injectable } from 'inversify'
import mongoose from 'mongoose'

@injectable()
export class MongoDb {
  constructor(
    @inject(infra.environment.databaseUrl)
    private readonly databaseUrl: string
  ) {}

  connect () {
    mongoose.connect(this.databaseUrl)
    const mongo = mongoose.connection
    mongo.on('error', console.error.bind(console, 'MongoDB connecton error'))
    return mongoose
  }

  get connection () {
    return this.connect()
  }
}