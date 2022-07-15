import { UserModel } from '@domain/models/user/models'
import { object, string } from 'yup'

const schema = object({
  email: string().email().required(),
  password: string().required()
})

export class LoginUserDto {
  constructor (
    public email: string,
    public password: string
  ) {}

  static from (user: Pick<UserModel.Base, 'email' | 'password'>): LoginUserDto {
    const { email, password } = schema.validateSync(user)
    return new LoginUserDto(email, password)
  }
}
