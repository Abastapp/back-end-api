import { GasStationContracts } from '@domain/models/gasStation/contracts'
import { GasStationModel } from '@domain/models/gasStation/models'
import { CreateGasStation } from '@domain/repositories/gasStation/store'
import { infra } from '@infra/common/ioc'
import { inject } from 'inversify'

export class CreateGasStationService implements GasStationContracts.CreateGasStationService {
  constructor(
    @inject(infra.repositories.gasStations.store)
    private readonly gasStationCraeteRepostory: CreateGasStation
  ) {}

  async execute(input: GasStationContracts.Inputs.ToCreate): Promise<GasStationModel.Base> {
    const gasStation = await this.gasStationCraeteRepostory.store(input)
    return gasStation
  }
}
