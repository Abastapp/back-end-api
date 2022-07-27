import { TokenModel } from '@domain/models/token/models'
import { UserModel } from '@domain/models/user/models'

export type ResponseUser = Omit<UserModel.Base, 'password'>
export type ResponseToken = Omit<TokenModel.Base, '_id'>
export type UserloginResponse = ResponseUser & ResponseToken

export class loginDto {
  static fromModel ({ id, birthDate, email, name }: ResponseUser, { date, token }: TokenModel.Base): UserloginResponse {
    return {
      id,
      birthDate,
      email,
      name,
      date,
      token
    }
  }

  static toModel () {
  }
}
