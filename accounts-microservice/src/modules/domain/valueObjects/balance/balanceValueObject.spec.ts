import { it, expect, describe } from 'vitest'

import { BalanceValueObject } from './balanceValueObject'

describe('BalanceValueObject', () => {
  it('should create a valid balance', () => {
    const balance = BalanceValueObject.create({ value: 1000 })
    expect(balance.isSuccess).toBe(true)
    expect(balance.getResult().value).toBe(1000)
  })

  it('should fail if balance is less than 0', () => {
    const balance = BalanceValueObject.create({ value: -1000 })
    expect(balance.isFailure).toBe(true)
    expect(balance.error).toBe('Balance cannot be less than 0')
  })
})
