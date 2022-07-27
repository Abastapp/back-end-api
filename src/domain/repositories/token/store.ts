import { TokenContracts } from '@domain/models/token/contracts'
import { TokenModel } from '@domain/models/token/models'

export interface CreateToken {
  store(input: TokenContracts.Inputs.ToCreate): Promise<TokenModel.Base>
}
