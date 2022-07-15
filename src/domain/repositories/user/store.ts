import { UserContracts } from '@domain/models/user/contracts'
import { UserModel } from '@domain/models/user/models'

export interface CreateUser {
  store(input: UserContracts.Inputs.ToCreate): Promise<UserModel.Base>
}
