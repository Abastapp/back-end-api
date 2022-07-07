import { BaseResponse } from '@infra/common/base'
import { NotFoundError } from '@domain/errors/notFoundError'

export class NotFoundResponse {
  static create (error: NotFoundError): BaseResponse {
    return {
      body: {
        message: error.message,
        date: new Date().toISOString()
      },
      status: 404
    }
  }
}
