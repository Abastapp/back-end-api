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
import { FindUserDto } from '@infra/dto/http/user/find.dto'

@controller(Paths.findUser)
export class FindUserController {
  constructor (
    @inject(domain.services.user.find)
    private readonly findUserService: UserContracts.FindUserService,
    @inject(domain.services.authetication.execute)
    private readonly authencationService: UserContracts.AuthenticationService
  ) {}

  @httpGet(
    '/',
    HeadersMiddleware.make(),
    ValidateMiddleware.withHeaders(FindUserDto)
  )
  async handler (req: BaseRequest<FindUserDto>, res: Response) {
    await this.authencationService.execute({ authorization: req.body.authorization })
    const user = await this.findUserService.execute({
      id: req.body.id
    })
    const response = SuccessResponse.create({ body: user })
    return res.status(response.status).json(response.body)
  }
}
