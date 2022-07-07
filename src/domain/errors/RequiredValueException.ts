import { ClientException } from './ClientException'

export class RequiredValueException extends ClientException {
  constructor(field: string) {
    super(`Valor do campo '${field}' deve ser informado`)

    Object.setPrototypeOf(this, RequiredValueException.prototype)
  }
}
