export class MethodNotAccepted extends Error {
  constructor(method: string) {
    super(`${method} is not accepted`)
  }
}
