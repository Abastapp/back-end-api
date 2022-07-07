import { BaseResponse } from '@infra/common/base'
import { ConflictError } from '@domain/errors/conflictError'

export class ConflictResponse {
  static create (error: ConflictError): BaseResponse {
    return {
      body: {
        message: error.message,
        date: new Date().toISOString()
      },
      status: 409
    }
  }
}
