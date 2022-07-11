import { BaseMiddleware } from '@infra/common/base/baseMiddleware'
import { Request, Response, NextFunction } from 'express'

export class HeadersMiddleware extends BaseMiddleware {
  execute (
    req: Request,
    res: Response,
    next: NextFunction
  ): void | Promise<void> {
    req.headers.ip = req.headers['user-ip'] ?? req.ip
    req.headers.lat = req.headers['locationlatitude']
    req.headers.lng = req.headers['locationlongitude']

    next()
  }

  static make () {
    return new HeadersMiddleware().execute
  }
}
