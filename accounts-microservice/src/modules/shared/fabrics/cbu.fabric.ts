import { CBUValueObject } from '../../domain/valueObjects/cbu/cbuValueObject'

export function cbuFabric (accountNumber: string): string {
  const cbu = [286, 0o0, 133, 9, accountNumber, 1].join('')

  const result = CBUValueObject.create({ value: cbu }).getResult().value

  return result
}
