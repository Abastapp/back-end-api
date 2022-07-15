import { UserModel } from '@domain/models/user/models'
import { object, string, date } from 'yup'

const schema = object().shape({
  name: string().required(),
  email: string().email().required(),
  birthDate: date().required(),
  password: string().required()
})

export class CreateUserDto {
  constructor (
    public name: string,
    public email: string,
    public birthDate: Date,
    public password: string
  ) {}

  static from (user: UserModel.Base): CreateUserDto {
    const { name, email, birthDate, password } = schema.validateSync(user)
    return new CreateUserDto(name, email, birthDate, password)
  }
}
