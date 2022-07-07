import { Container } from 'inversify'

export function domainBinder (
  container: Container,
  symbol: symbol,
  Class: { name: string; new (...args: any[]): unknown },
  dependencies: symbol[]
): void {
  const dependenciesFound = dependencies.map((dependency) =>
    container.get(dependency)
  )
  container.bind(symbol).toConstantValue(new Class(...dependenciesFound))
}
