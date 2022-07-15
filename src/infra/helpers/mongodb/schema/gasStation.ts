import { Schema } from 'mongoose'
import { GasStationModel } from '@domain/models/gasStation/models'

export const gasStationSchema = new Schema<GasStationModel.Base>({
  name: { type: 'string', required: true },
  email: { type: 'string', required: true, unique: true },
  cnpj: { type: 'string', required: true, unique: true },
  location: {
    lat: { type: 'number', required: true },
    lng: { type: 'number', required: true },
  }
})