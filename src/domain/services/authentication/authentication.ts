import { UnauthorizedError } from '@domain/errors/unauthorizedError'
import { UserContracts } from '@domain/models/user/contracts'
import { FindByField } from '@domain/repositories/user/findByField'

export class AuthenticationService implements UserContracts.AuthenticationService {
  constructor (
    private readonly findWhereUserRepository: FindByField
  ) { }

  async execute (input: UserContracts.Inputs.IAuthentication): Promise<void> {
    const [email] = Buffer.from(input.token.split(' ')[1], 'base64').toString().split(':')

    const user = await this.findWhereUserRepository.findByField({ email: email })

    if (!user) throw new UnauthorizedError('You are not authenticated!')
  }
}
