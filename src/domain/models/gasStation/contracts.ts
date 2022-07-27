import { GasStationModel, Location } from './models'

export namespace GasStationContracts {
  export namespace Inputs {
    export interface ToCreate{
      name: string
      email: string
      cnpj: string
      location: Location
    }
  }
  export interface CreateGasStationService {
    execute(input: Inputs.ToCreate): Promise<GasStationModel.Base>
  }
}
