import { BaseResponse } from '@infra/common/base/baseResponse'
import { StatusNotAllowed } from '@domain/errors/statusNotAllowed'

export class StatusNotAllowedResponse {
  static create (error: StatusNotAllowed): BaseResponse {
    return {
      body: {
        message: error.message,
        date: new Date().toISOString()
      },
      status: 422
    }
  }
}
