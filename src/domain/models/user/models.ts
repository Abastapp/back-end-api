export namespace UserModel {
  export interface Base {
    id: string
    name: string
    email: string
    birthDate: Date
    password?: string
  }
}
