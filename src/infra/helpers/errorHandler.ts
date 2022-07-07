import { BaseResponse } from '@infra/common/base/baseResponse'
import { Application, Request, Response, NextFunction } from 'express'
import { ValidationError } from 'yup'
import { Logger } from 'pino'
import {
  UnauthorizedResponse,
  ConflictResponse,
  NotFoundResponse,
  ServerErrorResponse,
  BadRequestResponse
} from '@infra/common/http'
import { NotFoundError } from '@domain/errors/notFoundError'
import { UnauthorizedError } from '@domain/errors/unauthorizedError'
import { BadRequestErrorMessageResult } from 'inversify-express-utils/lib/results'
import { ConflictError } from '@domain/errors/conflictError'
import { StatusNotAllowedResponse } from '@infra/common/http/statusNotAllowedResponse'

export function configureGlobalHandler (app: Application, logger: Logger): void {
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (!error) {
      return next()
    }

    const channel = req.headers['x-client-channel'] ?? 'API'

    Object.assign(error, {
      channel
    })

    logger.error(error, 'Error occurred')

    const response = getErrorResponse(error)

    res.status(response.status).json(response.body)
  })
}

const getErrorResponse = (error: Error): BaseResponse => {
  switch (error.constructor) {
    case UnauthorizedError:
      return UnauthorizedResponse.create(error)

    case ValidationError:
      return StatusNotAllowedResponse.create(error)

    case BadRequestErrorMessageResult:
      return BadRequestResponse.create(error)

    case ConflictError:
      return ConflictResponse.create(error)

    case NotFoundError:
      return NotFoundResponse.create(error)

    default:
      return ServerErrorResponse.create(error)
  }
}
