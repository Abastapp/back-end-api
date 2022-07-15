import { GasStationContracts } from '@domain/models/gasStation/contracts'
import { GasStationModel } from '@domain/models/gasStation/models'

export interface CreateGasStation {
  store(input: GasStationContracts.Inputs.ToCreate): Promise<GasStationModel.Base>
}