export const domain = {
  usecases: {
  },
  services: {
    user: {
      create: Symbol.for('CreateUserService'),
      find: Symbol.for('FindUserService'),
      login: Symbol.for('CreateTokenService')
    },
    gasStation: {
      create: Symbol.for('CreateGasStationService')
    },
    token: {
      create: Symbol.for('CreateGasStationService')
    }
  }
}
