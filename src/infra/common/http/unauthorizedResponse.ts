import { BaseResponse } from '@infra/common/base'
import { UnauthorizedError } from '@domain/errors/unauthorizedError'

export class UnauthorizedResponse {
  static create (error: UnauthorizedError): BaseResponse {
    return {
      body: {
        message: error.message,
        date: new Date().toISOString()
      },
      status: 401
    }
  }
}
