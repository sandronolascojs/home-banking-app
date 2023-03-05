import { expect, it, describe } from 'vitest'

import { PasswordValueObject } from './passwordValueObject'

describe('PasswordValueObject', () => {
  it('should create a valid password', () => {
    const password = PasswordValueObject.create({ value: 'Test123' })

    expect(password.isSuccess).toBe(true)
    expect(password.getResult().value).toBe('Test123')
  })

  it('should fail if password is empty', () => {
    const password = PasswordValueObject.create({ value: '' })

    expect(password.isFailure).toBe(true)
    expect(password.errorValue()).toBe('Password must not be empty')
  })

  it('should fail if password is too short', () => {
    const password = PasswordValueObject.create({ value: 'Test1' })

    expect(password.isFailure).toBe(true)
    expect(password.errorValue()).toBe('Password must be between 6 and 64 characters')
  })

  it('should fail if password is too long', () => {
    const password = PasswordValueObject.create({
      value: 'this_is_a_really_long_password_that_is_longer_than_sixty_four_characters'
    })

    expect(password.isFailure).toBe(true)
    expect(password.errorValue()).toBe('Password must be between 6 and 64 characters')
  })

  it('should fail if password does not contain at least one uppercase letter', () => {
    const password = PasswordValueObject.create({ value: 'test123' })

    expect(password.isFailure).toBe(true)
    expect(password.errorValue()).toBe('Password must contain at least one uppercase letter, one lowercase letter and one number')
  })

  it('should fail if password does not contain at least one lowercase letter', () => {
    const password = PasswordValueObject.create({ value: 'TEST123' })

    expect(password.isFailure).toBe(true)
    expect(password.errorValue()).toBe('Password must contain at least one uppercase letter, one lowercase letter and one number')
  })

  it('should fail if password does not contain at least one number', () => {
    const password = PasswordValueObject.create({ value: 'TestTest' })

    expect(password.isFailure).toBe(true)
    expect(password.errorValue()).toBe('Password must contain at least one uppercase letter, one lowercase letter and one number')
  })
})
