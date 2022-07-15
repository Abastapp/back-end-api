import { NotFoundError, UnauthorizedError } from '@domain/errors/notFoundError'
import { UserContracts } from '@domain/models/user/contracts'
import { UserModel } from '@domain/models/user/models'
import { FindWhereUser } from '@domain/repositories/user/findWhere'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class LoginUserService implements UserContracts.LoginUserService {
  constructor (
    private readonly findWhereUserRepository: FindWhereUser
  ) {}

  async login (email: string, password: string): Promise<UserModel.Base> {
    const user = await this.findWhereUserRepository.findWhere(email)

    if (!user) throw new NotFoundError('User not found')

    const decryptedPassword = await bcrypt.compare(password, user.password as string)

    if (!decryptedPassword) throw new UnauthorizedError('Invalid credentials')

    const token = jwt.sign(
      { user_id: user.id, email },
      process.env.SECRET_KEY as string,
      {
        expiresIn: '2h'
      }
    )

    user.token = token
    return user
  }
}
