import { it, describe, expect } from 'vitest'

import { FirstNameValueObject } from './firstNameValueObject'

describe('firstNameValueObject', () => {
  it('should create a valid first name', () => {
    const firstName = FirstNameValueObject.create({ value: 'John' })

    expect(firstName.isSuccess).toBe(true)
    expect(firstName.getResult().value).toBe('John')
  })

  it('should fail if fist name is not valid', () => {
    const firstName = FirstNameValueObject.create({ value: 'John!' })

    expect(firstName.isFailure).toBe(true)
    expect(firstName.error).toBe('First name is not valid')
  })

  it('should fail if first name is empty', () => {
    const firstName = FirstNameValueObject.create({ value: '' })

    expect(firstName.isFailure).toBe(true)
    expect(firstName.error).toBe('First name must not be empty')
  })

  it('should trim first name', () => {
    const firstName = FirstNameValueObject.create({ value: ' John ' })

    expect(firstName.isSuccess).toBe(true)
    expect(firstName.getResult().value).toBe('John')
  })

  it('should fail if first name contains numbers', () => {
    const firstName = FirstNameValueObject.create({ value: 'John123' })

    expect(firstName.isFailure).toBe(true)
    expect(firstName.error).toBe('First name is not valid')
  })
})
