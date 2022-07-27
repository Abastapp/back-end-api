import { NotFoundError, UnauthorizedError } from '@domain/errors/notFoundError'
import { UserContracts } from '@domain/models/user/contracts'
import { FindByField } from '@domain/repositories/user/findByField'
import { CreateToken } from '@domain/repositories/token/store'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { DateTime } from 'luxon'
import { UserloginResponse, loginDto } from '@infra/dto/user/loginDto'

export class LoginUserService implements UserContracts.LoginUserService {
  constructor (
    private readonly findWhereUserRepository: FindByField,
    private readonly createTokenRepository: CreateToken,
    private readonly secretKey: string
  ) { }

  async login (email: string, password: string): Promise<UserloginResponse> {
    const user = await this.findWhereUserRepository.findByField({ email: email })

    if (!user) throw new NotFoundError('User not found')

    const decryptedPassword = await bcrypt.compare(password, user.password as string)

    if (!decryptedPassword) throw new UnauthorizedError('Invalid credentials')

    const token = jwt.sign(
      { user_id: user.id, email },
      this.secretKey,
      {
        expiresIn: '2h'
      }
    )

    const tokenSaved = await this.createTokenRepository.store({
      token,
      date: DateTime.now().toString()
    })

    return loginDto.fromModel(user, tokenSaved)
  }
}
