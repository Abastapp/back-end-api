import { Response } from 'express'
import { controller, httpGet } from 'inversify-express-utils'
import { Paths } from '@infra/common/base/controllerBasePaths'
import { BaseRequest } from '@infra/common/base/baseRequest'
import { SuccessResponse } from '@infra/common/http'

@controller(Paths.health)
export class HealthController {
  @httpGet('/')
  async handle (_req: BaseRequest<null>, res: Response) {
    const response = SuccessResponse.create({
      body: {
        status: 'OK',
      },
    })

    return res.status(response.status).json(response.body)
  }
}
