import { expect, it, describe } from 'vitest'

import { UsernameValueObject } from './usernameValueObject'

describe('UsernameValueObject', () => {
  it('should create a valid username', () => {
    const username = UsernameValueObject.create({ value: 'test' })

    expect(username.isSuccess).toBe(true)
    expect(username.getResult().value).toBe('test')
  })

  it('should fail if username is empty', () => {
    const username = UsernameValueObject.create({ value: '' })

    expect(username.isFailure).toBe(true)
    expect(username.errorValue()).toBe('Username cannot be empty')
  })

  it('should fail if username is too short', () => {
    const username = UsernameValueObject.create({ value: 'te' })

    expect(username.isFailure).toBe(true)
    expect(username.errorValue()).toBe('Username must be between 3 and 30 characters')
  })

  it('should fail if username is too long', () => {
    const username = UsernameValueObject.create({
      value: 'this_is_a_really_long_username_that_is_longer_than_thirty_characters'
    })

    expect(username.isFailure).toBe(true)
    expect(username.errorValue()).toBe('Username must be between 3 and 30 characters')
  })

  it('should fail if username contains invalid characters', () => {
    const username = UsernameValueObject.create({ value: 'test@' })

    expect(username.isFailure).toBe(true)
    expect(username.errorValue()).toBe('Username is invalid. Only alphanumeric characters, underscores and dots are allowed.')
  })
})
