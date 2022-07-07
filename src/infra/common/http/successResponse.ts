import { BaseResponse } from '@infra/common/base'

interface Data<T> {
  body?: T | T[];
  header?: Record<string, unknown>;
}

export class SuccessResponse {
  static create<T> ({ body, header }: Data<T>): BaseResponse {
    return {
      status: 200,
      body,
      header
    }
  }
}
