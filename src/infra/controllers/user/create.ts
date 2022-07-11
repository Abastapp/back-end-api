import { SuccessResponse } from '@infra/common/http'
import { controller, httpGet, httpPost } from 'inversify-express-utils'
import { Response } from 'express'
import { Paths } from '@infra/common/base/controllerBasePaths'
import { BaseRequest } from '@infra/common/base'
import { ValidateMiddleware } from '@infra/middlewares/validation'
import { HeadersMiddleware } from '@infra/middlewares/headers'
import { inject } from 'inversify'
import { domain } from '@domain/common/ioc'
import { UserContracts } from '@domain/models/user/contracts'
import { CreateUserDto } from '@infra/dto/http/user/create.dto'

@controller(Paths.createUser)
export class CreateUserController {
  constructor(
    @inject(domain.services.user.create)
    private readonly createUserService: UserContracts.CreateUserService
  ) {}
  
  @httpPost(
    '/',
    HeadersMiddleware.make(),
    ValidateMiddleware.withHeaders(CreateUserDto)
  )
  async handler(req: BaseRequest<CreateUserDto>, res: Response) {
    const user = await this.createUserService.execute({
      name: req.body.name,
      email: req.body.email,
      birthDate: req.body.birthDate,
      password: req.body.password
    })
    const response = SuccessResponse.create({ body: user })
    return res.status(response.status).json(response.body)
  }
}
