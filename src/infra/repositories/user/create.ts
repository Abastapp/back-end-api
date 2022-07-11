import { CreateUser } from '@domain/repositories/user/store'
import { UserContracts } from '@domain/models/user/contracts'
import { UserModel } from '@domain/models/user/models'
import { infra } from '@infra/common/ioc'
import { MongoDb } from '@infra/providers/mongodb'
import { inject, injectable } from 'inversify'
import { userSchema } from '@infra/helpers/mongodb/schema/user'
import bcrypt from 'bcrypt'

@injectable()
export class CreateUserRepository implements CreateUser {
  constructor(
    @inject(infra.connectors.mongodb)
    private readonly db: MongoDb
  ) {}

  async store({ name, email, password, birthDate }: UserContracts.Inputs.ToCreate): Promise<UserModel.Base> {
    const User = this.db.connection.model<UserModel.Base>('User', userSchema)
    const user = new User({
      name: name,
      email: email,
      password: password,
      birthDate: birthDate
    })
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    await user.save()
    return user
  }
}