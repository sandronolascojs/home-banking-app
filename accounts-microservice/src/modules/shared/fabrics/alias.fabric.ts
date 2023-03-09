import { faker } from '@faker-js/faker'

export function aliasFabric (): string {
  const word = faker.random.word()
  const animal = faker.animal.type()
  const color = faker.color.human()

  return `${word}.${animal}.${color}.BANK`
}
