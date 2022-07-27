import { UserModel } from '@domain/models/user/models'
import { infra } from '@infra/common/ioc'
import { MongoDb } from '@infra/providers/mongodb'
import { inject, injectable } from 'inversify'
import { userSchema } from '@infra/helpers/mongodb/schema/user'
import { FindByField, Keys } from '@domain/repositories/user/findByField'
import { SearchFields } from '@domain/models/user/contracts'

@injectable()
export class FindWhereUserRepository implements FindByField {
  constructor (
    @inject(infra.connectors.mongodb)
    private readonly db: MongoDb
  ) {}

  async findByField (input: Keys): Promise<UserModel.Base | null> {
    try {
      const User = this.db.connection.model<UserModel.Base>('User', userSchema)
      const user = await User.findOne(input).exec()
      return user
    } catch (err) {
      console.error('Error: ', err)
      return null
    }
  }
}
