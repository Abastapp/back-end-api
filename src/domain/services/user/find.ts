import { NotFoundError } from '@domain/errors/notFoundError'
import { UserContracts } from '@domain/models/user/contracts'
import { UserModel } from '@domain/models/user/models'
import { FindUser } from '@domain/repositories/user/find'

export class FindUserService implements UserContracts.FindUserService {
  constructor (
    private readonly findUserRepository: FindUser
  ) {}

  async execute ({ id }: Pick<UserModel.Base, 'id'>): Promise<UserModel.Base> {
    const user = await this.findUserRepository.find({ id: id })

    if (!user) throw new NotFoundError('User not found')

    return user
  }
}
