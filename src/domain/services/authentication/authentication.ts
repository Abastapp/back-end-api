import { UnauthorizedError } from '@domain/errors/unauthorizedError'
import { UserContracts } from '@domain/models/user/contracts'
import { FindByField } from '@domain/repositories/user/findByField'
import { UserloginResponse } from '@infra/dto/user/loginDto'

export class AuthenticationService implements UserContracts.AuthenticationService {
  constructor (
    private readonly findWhereUserRepository: FindByField
  ) { }

  async execute (input: UserContracts.Inputs.IAuthentication): Promise<void> {
    let jwt = input.authorization.split(' ')[1]
    jwt = Buffer.from(jwt.split('.')[1], 'base64').toString()
    const { email } = JSON.parse(jwt) as UserloginResponse
    const user = await this.findWhereUserRepository.findByField({ email })
    if (!user) throw new UnauthorizedError('You are not authenticated!')
  }
}
