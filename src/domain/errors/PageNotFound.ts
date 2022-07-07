import { PageContracts } from '../models/page/contracts'

export class PageNotFoundError extends Error {
  public data: PageContracts.Inputs.Migration

  constructor (input: PageContracts.Inputs.Migration) {
    super(
      input.pageId
        ? `Page with Id ${input.pageId} not found`
        : `Product Page with id ${input.catalogId} not found`
    )
    this.name = 'NotFoundError'
    this.data = input
  }
}
