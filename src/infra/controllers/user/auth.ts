import { SuccessResponse } from '@infra/common/http'
import { controller, httpGet } from 'inversify-express-utils'
import { Response } from 'express'
import { Paths } from '@infra/common/base/controllerBasePaths'
import { BaseRequest } from '@infra/common/base'
import { ValidateMiddleware } from '@infra/middlewares/validation'
import { HeadersMiddleware } from '@infra/middlewares/headers'
import { inject } from 'inversify'
import { domain } from '@domain/common/ioc'
import { UserContracts } from '@domain/models/user/contracts'
import { LoginUserDto } from '@infra/dto/http/user/find.dto'

@controller(Paths.findUser)
export class FindUserController {
  constructor (
    @inject(domain.services.user.find)
    private readonly LoginUserService: UserContracts.LoginUserService
  ) {}

  @httpGet(
    '/login',
    HeadersMiddleware.make(),
    ValidateMiddleware.withHeaders(LoginUserDto)
  )
  async handler (req: BaseRequest<LoginUserDto>, res: Response) {
    const user = await this.LoginUserService.login(req.body.email, req.body.password)
    const response = SuccessResponse.create({ body: user })
    return res.status(response.status).json(response.body)
  }
}
