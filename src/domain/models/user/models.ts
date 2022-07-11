export namespace UserModel {
  export interface Base {
    name: string
    email: string
    birthDate: Date
    password?: string
  }
}