import { BaseResponse } from '@infra/common/base'

export class ServerErrorResponse {
  static create (error: Error): BaseResponse {
    return {
      body: {
        message: error.message,
        date: new Date().toISOString()
      },
      status: 500
    }
  }
}
