export class NotFoundError extends Error {
  public data?: unknown

  constructor (message: string, data?: unknown) {
    super(message)
    this.name = 'NotFoundError'
  }
}
