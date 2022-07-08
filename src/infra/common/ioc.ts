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
  }
}