export class ClientException extends Error {
  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, ClientException.prototype)
  }
}
