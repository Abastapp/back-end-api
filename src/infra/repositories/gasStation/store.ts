import { infra } from '@infra/common/ioc'
import { MongoDb } from '@infra/providers/mongodb'
import { inject, injectable } from 'inversify'
import { CreateGasStation } from '@domain/repositories/gasStation/store'
import { GasStationModel } from '@domain/models/gasStation/models'
import { GasStationContracts } from '@domain/models/gasStation/contracts'
import { gasStationSchema } from '@infra/helpers/mongodb/schema/gasStation'

@injectable()
export class CreateGasStationRepository implements CreateGasStation {
  constructor(
    @inject(infra.connectors.mongodb)
    private readonly db: MongoDb
  ) {}

  async store({ 
    name, 
    email, 
    cnpj, 
    location,
  }: GasStationContracts.Inputs.ToCreate): Promise<GasStationModel.Base> {
    const GasStation = this.db.connection.model<GasStationModel.Base>('GasStation', gasStationSchema)
    const gasStation = new GasStation({
      name: name,
      email: email,
      cnpj: cnpj,
      location: location
    })
    await gasStation.save()
    return gasStation
  }
}
