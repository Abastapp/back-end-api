import { UserModel } from '@domain/models/user/models'
import { object, string } from 'yup'

const schema = object({
  id: string().required(),
  token: string().required()
})

export class FindUserDto {
  constructor (
    public id: string,
    public token: string
  ) {}

  static from (user: Pick<UserModel.Base, 'id'>): FindUserDto {
    const { id, token } = schema.validateSync(user)
    return new FindUserDto(id, token)
  }
}
