export class UnauthorizedError extends Error {
  constructor (message: string) {
    super()
    this.name = 'UnauthorizedError'
  }
}
