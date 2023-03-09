import { it, describe, expect } from 'vitest'
import { UniqueEntityID } from '../../shared'

import { AccountIdValueObject } from './accountId.valueObject'

describe('AccountId', () => {
  it('should create a valid account id', () => {
    const result = AccountIdValueObject.create()

    expect(result.isSuccess).toBe(true)
  })

  it('should create a valid account id with an existing id value', () => {
    const result = AccountIdValueObject.create(new UniqueEntityID('122333'))

    expect(result.isSuccess).toBe(true)
    expect(result.getResult().id.toValue()).toBe('122333')
  })
})
