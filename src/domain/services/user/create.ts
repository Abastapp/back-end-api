import { UserContracts } from '@domain/models/user/contracts'
import { UserModel } from '@domain/models/user/models'
import { CreateUser } from '@domain/repositories/user/store'
import { infra } from '@infra/common/ioc'
import { inject } from 'inversify'
import jwt from 'jsonwebtoken'

export class CreateUserService implements UserContracts.CreateUserService {
  constructor (
    @inject(infra.repositories.user.store)
    private readonly createUserRepository: CreateUser
  ) {}

  async execute (input: UserContracts.Inputs.ToCreate): Promise<UserModel.Base> {
    const user = await this.createUserRepository.store(input)

    const token = jwt.sign(
      { user_id: user.id, enail: user.email },
      process.env.SECRET_KEY as string,
      {
        expiresIn: '2h'
      }
    )

    user.token = token
    return user
  }
}
