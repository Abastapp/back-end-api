import { Schema } from 'mongoose'
import { TokenModel } from '@domain/models/token/models'

export const tokenSchema = new Schema<TokenModel.Base>({
  token: { type: 'string', required: true },
  date: { type: 'string', required: true }
})
