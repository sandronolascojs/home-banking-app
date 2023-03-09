import { it, describe, expect } from 'vitest'
import { accountNumberFabric } from '../../../shared/fabrics/accountNumber.fabric'

import { AccountNumberValueObject } from './accountNumberValueObject'

describe('AccountNumberValueObject', () => {
  it('should create a valid account number', () => {
    const raw = accountNumberFabric()

    const accountNumber = AccountNumberValueObject.create({ value: raw })

    expect(accountNumber.isSuccess).toBe(true)
  })

  it('should fail if account number is empty', () => {
    const raw = ''

    const accountNumber = AccountNumberValueObject.create({ value: raw })

    expect(accountNumber.isFailure).toBe(true)
  })

  it('should fail if account number is not 13 digits', () => {
    const raw = '12222222222'

    const accountNumber = AccountNumberValueObject.create({ value: raw })

    expect(accountNumber.isFailure).toBe(true)
  })

  it('should fail if account number is not a number', () => {
    const raw = '1222222aaaaaaaaaaa'

    const accountNumber = AccountNumberValueObject.create({ value: raw })

    expect(accountNumber.isFailure).toBe(true)
    expect(accountNumber.error).toBe('Account number must be a number')
  })
})
