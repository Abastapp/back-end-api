import { ClientException } from './ClientException'

export class InvalidNumberException extends ClientException {
  constructor(field: string) {
    super(`Valor do campo '${field}' deve ser um número válido`)

    Object.setPrototypeOf(this, InvalidNumberException.prototype)
  }
}
