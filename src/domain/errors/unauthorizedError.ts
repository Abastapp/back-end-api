export class UnauthorizedError extends Error {
  constructor (message: string, status: number) {
    super(message)
    this.name = 'UnauthorizedError'
    this.status = status
  }
}
