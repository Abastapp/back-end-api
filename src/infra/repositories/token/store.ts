import { infra } from '@infra/common/ioc'
import { MongoDb } from '@infra/providers/mongodb'
import { inject, injectable } from 'inversify'
import { CreateToken } from '@domain/repositories/token/store'
import { TokenContracts } from '@domain/models/token/contracts'
import { TokenModel } from '@domain/models/token/models'
import { tokenSchema } from '@infra/helpers/mongodb/schema/token'

@injectable()
export class CreateTokenRepository implements CreateToken {
  constructor (
    @inject(infra.connectors.mongodb)
    private readonly db: MongoDb
  ) {}

  async store ({ token, date }: TokenContracts.Inputs.ToCreate): Promise<TokenModel.Base> {
    const Token = this.db.connection.model<TokenModel.Base>('Token', tokenSchema)
    const newToken = await new Token({
      token,
      date
    })
    await newToken.save()
    return newToken
  }
}
