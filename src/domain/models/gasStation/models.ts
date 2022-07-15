export type Location = {
  lat: number
  lng: number
}

export namespace GasStationModel {
  export interface Base {
    _id: string
    name: string
    email: string
    cnpj: string
    location: Location
  }
}
