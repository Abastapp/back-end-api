import { BaseResponse } from '@infra/common/base'

export class SuccessNoContent {
  static create (): BaseResponse {
    return {
      status: 204,
      body: undefined,
      header: undefined
    }
  }
}
