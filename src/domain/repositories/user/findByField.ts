import { UserModel } from '@domain/models/user/models'
import { SearchFields } from '@domain/models/user/contracts'

export type Keys = {
  [key: string]: string
}

export interface FindByField {
  findByField(input: Keys): Promise<UserModel.Base | null>
}
