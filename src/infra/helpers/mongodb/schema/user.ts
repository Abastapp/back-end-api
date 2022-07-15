import { Schema } from 'mongoose'
import { UserModel } from '@domain/models/user/models'

export const userSchema = new Schema<UserModel.Base>({
  name: { type: 'string', required: true },
  email: { type: 'string', required: true, unique: true },
  password: { type: 'string', required: true },
  birthDate: { type: 'date', required: true }
})
