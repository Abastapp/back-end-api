import { GasStationModel, Location } from '@domain/models/gasStation/models'
import { number, object, string } from 'yup'

const secret: string = process.env.SECRET ?? 'JarssinGod'

export const locationSchema = object().shape({
  lat: number().required(),
  lng: number().required()
})

const schema = object().shape({
  name: string().required(),
  email: string().email().required(),
  cnpj: string().matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/).required(),
  location: locationSchema,
  secret: string().oneOf([secret], 'Not a valid secret').required()
})

export class CreateGasStationDto {
  constructor (
    public name: string,
    public email: string,
    public cnpj: string,
    public location: Location,
    public secret: string
  ) {}

  static from (gasStation: GasStationModel.Base): CreateGasStationDto {
    const { name, email, cnpj, location, secret } = schema.validateSync(gasStation)
    return new CreateGasStationDto(name, email, cnpj, location, secret)
  }
}
