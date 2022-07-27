import { UserModel } from './models'

export type SearchFields = 'name' | 'email' | 'birthDate'

export namespace UserContracts {
  export namespace Inputs {
    export interface ToCreate {
      name: string
      email: string
      birthDate: Date
      password: string
    }

    export type FindByField = {
      [key in SearchFields]: string
    }

    export interface IAuthentication {
      authorization: string
    }
  }

  export namespace Outputs {
  }

  export interface CreateUserService {
    execute(input: Inputs.ToCreate): Promise<UserModel.Base>
  }

  export interface FindUserService {
    execute(input: Pick<UserModel.Base, 'id'>): Promise<UserModel.Base>
  }

  export interface LoginUserService {
    login(email: string, password: string): Promise<UserModel.Base>
  }

  export interface FindByField {
    execute(input: Inputs.FindByField): Promise<UserModel.Base>
  }
  export interface AuthenticationService {
    execute(input: Inputs.IAuthentication): Promise<void>
  }
}
