import { TokenModel } from './models'

export namespace TokenContracts {
  export namespace Inputs {
    export interface ToCreate{
      token: string
      date: string
    }
  }
  export interface CreateTokenService {
    execute(input: Inputs.ToCreate): Promise<TokenModel.Base>
  }
}
