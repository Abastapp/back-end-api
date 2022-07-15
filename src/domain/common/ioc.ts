export const domain = {
  usecases: {
  },
  services: {
    user: {
      create: Symbol.for('CreateUserService'),
      find: Symbol.for('FindUserController')
    },
    gasStation: {
      create: Symbol.for('CreateGasStationService')
    }
  }
}
