import { it, expect, describe } from 'vitest'
import { UniqueEntityID } from '../../shared'

import { UserIdValueObject } from './userIdValueObject'

describe('UserIdValueObject', () => {
  it('should create a valid user id', () => {
    const userId = UserIdValueObject.create({ value: new UniqueEntityID('e076f316-219c-4a9a-8eb2-5eec2ad696cd') })

    expect(userId.isSuccess).toBe(true)
    expect(userId.getResult().value.toString()).toBe('e076f316-219c-4a9a-8eb2-5eec2ad696cd')
  })

  it('should fail if user id is not provided', () => {
    const userId = UserIdValueObject.create({ value: new UniqueEntityID('') })

    expect(userId.isFailure).toBe(true)
    expect(userId.error).toBe('User id is required')
  })
})
