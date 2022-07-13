import { FindUser } from '@domain/repositories/user/find'
import { UserModel } from '@domain/models/user/models'
import { infra } from '@infra/common/ioc'
import { MongoDb } from '@infra/providers/mongodb'
import { inject, injectable } from 'inversify'
import { userSchema } from '@infra/helpers/mongodb/schema/user'

@injectable()
export class FindUserRepository implements FindUser {
  constructor(
    @inject(infra.connectors.mongodb)
    private readonly db: MongoDb
  ) {}

  async find({ id }: Pick<UserModel.Base, 'id'>): Promise<UserModel.Base | null> {
    try {
      const User = this.db.connection.model<UserModel.Base>('User', userSchema)
      const user = await User.findById(id).exec()
      return user
    }
    catch (err) {
      console.error('Error: ', err)
      return null
    }
  }
}
