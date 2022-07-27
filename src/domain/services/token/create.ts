import { TokenContracts } from '@domain/models/token/contracts'
import { TokenModel } from '@domain/models/token/models'
import { infra } from '@infra/common/ioc'
import { CreateTokenRepository } from '@infra/repositories/token/store'
import { inject } from 'inversify'

export class CreateTokenService implements TokenContracts.CreateTokenService {
  constructor (
    @inject(infra.repositories.token.store)
    private readonly createCreateTokenRepository: CreateTokenRepository
  ) {}

  async execute (input: TokenContracts.Inputs.ToCreate): Promise<TokenModel.Base> {
    return await this.createCreateTokenRepository.store(input)
  }
}
