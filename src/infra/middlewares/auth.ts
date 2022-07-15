import { UnauthorizedError } from '@domain/errors/unauthorizedError'
import { BaseMiddleware } from '@infra/common/base/baseMiddleware'
import { Request, Response, NextFunction } from 'express'
import { FindUser } from '@domain/repositories/user/find'

export class AuthMiddleware extends BaseMiddleware {
  execute (
    req: Request,
    res: Response,
    next: NextFunction
  ): void | Promise<void> {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      const err = new UnauthorizedError('You are not authenticated!', 401)
      res.setHeader('WWW-Authenticate', 'Basic')
      return next(err)
    }

    const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':')
    const user = auth[0]
    const pass = auth[1]

    if (user === 'admin' && pass === 'password') {
      next()
    } else {
      const err = new Error('You are not authenticated!')
      res.setHeader('WWW-Authenticate', 'Basic')
      err.status = 401
      return next(err)
    }
    next()
  }

  static make () {
    return new AuthMiddleware().execute
  }
}
