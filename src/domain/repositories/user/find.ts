import { UserModel } from "@domain/models/user/models";

export interface FindUser {
  find(input: Pick<UserModel.Base, "id">): Promise<UserModel.Base | null>
}
