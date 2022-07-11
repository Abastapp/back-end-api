import { infra } from '@infra/common/ioc'
import { inject, injectable } from 'inversify'
import mongoose from 'mongoose'

@injectable()
export class MongoDb {
  constructor(
    @inject(infra.environment.databaseUrl)
    private readonly databaseUrl: string
  ) {}

  private connect () {
    mongoose
      .connect(this.databaseUrl)
      .then(() => {
        console.log("MongoDB is connected")
      })
      .catch(err => {
        console.log(`MongoDB connection error: `, err)
      })

    return mongoose
  }

  get connection () {
    return this.connect()
  }
}