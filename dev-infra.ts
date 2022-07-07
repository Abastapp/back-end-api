// eslint-disable-next-line
import 'reflect-metadata'

const start = async () => {

}

start().then(_ => {
  console.info('iniciou infra')
  // eslint-disable-next-line global-require
  import('./src/main/server')
})
