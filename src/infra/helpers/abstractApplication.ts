import { Container, interfaces } from 'inversify'

export interface IAbstractApplicationOptions {
  containerOpts?: interfaces.ContainerOptions;
}
export abstract class Application {
  protected readonly container: Container;

  constructor (options: IAbstractApplicationOptions) {
    const { containerOpts } = options

    const defaultScope: interfaces.BindingScope =
      process.env.NODE_ENV === 'production' ? 'Singleton' : 'Request'

    this.container = new Container({ ...containerOpts, defaultScope })

    this.configureServices(this.container)
    this.setup(options)
  }

  abstract configureServices(container: Container): void;
  abstract setup(options: IAbstractApplicationOptions): Promise<void> | void;
}
