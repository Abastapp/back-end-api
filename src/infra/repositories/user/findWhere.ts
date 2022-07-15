import { UserModel } from '@domain/models/user/models'
import { infra } from '@infra/common/ioc'
import { MongoDb } from '@infra/providers/mongodb'
import { inject, injectable } from 'inversify'
import { userSchema } from '@infra/helpers/mongodb/schema/user'
import { FindWhereUser } from '@domain/repositories/user/findWhere'

@injectable()
export class FindWhereUserRepository implements FindWhereUser {
  constructor (
    @inject(infra.connectors.mongodb)
    private readonly db: MongoDb
  ) {}

  async findWhere (email: string): Promise<UserModel.Base | null> {
    try {
      const User = this.db.connection.model<UserModel.Base>('User', userSchema)
      const user = await User.findOne({ email: email }).exec()
      return user
    } catch (err) {
      console.error('Error: ', err)
      return null
    }
  }
}
