import { it, describe, expect } from 'vitest'
import { AccountTypeValueObject } from './accountType.valueObject'

describe('AccountIdValueObject', () => {
  it('should return an error if the value is empty', () => {
    const result = AccountTypeValueObject.create({ value: '' })

    expect(result.isFailure).toBe(true)
  })

  it('should return an error if the value is not a valid account type', () => {
    const result = AccountTypeValueObject.create({ value: 'invalid' })

    expect(result.isFailure).toBe(true)
    expect(result.error).toBe('Account type must be business or personal')
  })

  it('should return a valid account type', () => {
    const result = AccountTypeValueObject.create({ value: 'business' })

    expect(result.isSuccess).toBe(true)
    expect(result.getResult().value).toBe('business')
  })
})
