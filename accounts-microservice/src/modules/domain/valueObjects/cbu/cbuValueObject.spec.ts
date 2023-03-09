import { it, describe, expect } from 'vitest'
import { accountNumberFabric } from '../../../shared/fabrics/accountNumber.fabric'
import { cbuFabric } from '../../../shared/fabrics/cbu.fabric'
import { CBUValueObject } from './cbuValueObject'

describe('CBUValueObject', () => {
  it('should create a valid CBU', async () => {
    const accountNumber = accountNumberFabric()
    const cbu = await cbuFabric(accountNumber)
    const result = CBUValueObject.create({ value: cbu })

    expect(result.isSuccess).toBe(true)
    expect(result.getResult().value).toBe(cbu)
  })
})
