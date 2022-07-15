import { BaseMiddleware } from '@infra/common/base/baseMiddleware'
import { Request, Response, NextFunction } from 'express'

export class ValidateMiddleware extends BaseMiddleware {
  constructor (
    private readonly _DtoClass: { from: any },
    private readonly withParams = false,
    private readonly withHeaders = false
  ) {
    super()
  }

  execute (
    req: Request,
    res: Response,
    next: NextFunction
  ): void | Promise<void> {
    if (this.withParams) {
      req.body = {
        ...req.body,
        ...req.params,
        ...req.headers
      }
    }

    if (this.withHeaders) {
      req.body = {
        ...req.query,
        ...req.body,
        ...req.headers
      }
    }

    const dto = this._DtoClass.from(req.body)
    req.body = dto

    next()
  }

  static with (dto: any) {
    return new ValidateMiddleware(dto).execute
  }

  static withHeaders (dto: any) {
    return new ValidateMiddleware(dto, false, true).execute
  }

  static withParams (dto: any) {
    return new ValidateMiddleware(dto, true).execute
  }

  static withAll (dto: any) {
    return new ValidateMiddleware(dto, true, true).execute
  }
}
