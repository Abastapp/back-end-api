export const infra = {
  connectors: {
    mongodb: Symbol.for('MongoDb'),
  },
  providers: {
    logger: Symbol.for('Logger'),
  },
  environment: {
    port: Symbol.for('Port'),
    databaseUrl: Symbol.for('DatabaseUrl'),
    secret: Symbol.for('Secret')
  },
  repositories: {
    user: {
      store: Symbol.for('CreateUserRepository'),
      find: Symbol.for('FindUserRespository')
    },
    gasStations: {
      store: Symbol.for('CreateGasStationRepository')
    }
  }
}
