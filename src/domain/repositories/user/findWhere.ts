import { UserModel } from '@domain/models/user/models'

export interface FindWhereUser {
  findWhere(email: string): Promise<UserModel.Base | null>
}
