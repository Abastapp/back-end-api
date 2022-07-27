export class StatusNotAllowed extends Error {
  constructor (status: string) {
    super(`Status ${status} not allowed`)
  }
}
