import { UserModel } from "./models"

export namespace UserContracts {
  export namespace Inputs {
    export interface ToCreate {
      name: string
      email: string
      birthDate: Date
      password: string
    }
  }

  export namespace Outputs {
  }

  export interface CreateUserService {
    execute(input: Inputs.ToCreate): Promise<UserModel.Base>
  }
}