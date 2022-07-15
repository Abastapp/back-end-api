import { SuccessResponse } from '@infra/common/http'
import { controller, httpPost } from 'inversify-express-utils'
import { Response } from 'express'
import { Paths } from '@infra/common/base/controllerBasePaths'
import { BaseRequest } from '@infra/common/base'
import { ValidateMiddleware } from '@infra/middlewares/validation'
import { HeadersMiddleware } from '@infra/middlewares/headers'
import { inject } from 'inversify'
import { domain } from '@domain/common/ioc'
import { GasStationContracts } from '@domain/models/gasStation/contracts'
import { CreateGasStationDto } from '@infra/dto/http/gasSatation/create.dto'

@controller(Paths.createGasStation)
export class CreateGasStationController {
  constructor(
    @inject(domain.services.gasStation.create)
    private readonly createGasStationService: GasStationContracts.CreateGasStationService
  ) {}

  @httpPost(
    '/',
    HeadersMiddleware.make(),
    ValidateMiddleware.withHeaders(CreateGasStationDto)
  )
  async handler(req: BaseRequest<CreateGasStationDto>, res: Response) {
    const GasStation = await this.createGasStationService.execute({
      name: req.body.name,
      email: req.body.email,
      cnpj: req.body.cnpj,
      location: req.body.location
    })
    const response = SuccessResponse.create({ body: GasStation })
    return res.status(response.status).json(response.body)
  }
}
