import { NextFunction, Request, Response } from 'express'

export abstract class BaseMiddleware {
  abstract execute(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void | Promise<void>;

  constructor() {
    this.execute = this.execute.bind(this)
  }
}
