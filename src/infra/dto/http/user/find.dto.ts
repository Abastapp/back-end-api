import { UserModel } from '@domain/models/user/models'
import { object, string } from 'yup'

const schema = object({
  id: string().required(),
  authorization: string().required()
})

export class FindUserDto {
  constructor (
    public id: string,
    public authorization: string
  ) {}

  static from (user: Pick<UserModel.Base, 'id'>): FindUserDto {
    const { id, authorization } = schema.validateSync(user)
    return new FindUserDto(id, authorization)
  }
}
