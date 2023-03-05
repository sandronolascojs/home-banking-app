import { describe, it, expect } from 'vitest'
import { CountryValueObject } from './countryValueObject'

describe('CountryValueObject', () => {
  it('should create a valid country', () => {
    const country = CountryValueObject.create({ value: 'US' })

    expect(country.isSuccess).toBe(true)
    expect(country.getResult().value).toBe('US')
    expect(country.getResult().value).not.toBe('us')
  })

  it('should fail if country is empty', () => {
    const country = CountryValueObject.create({ value: '' })

    expect(country.isFailure).toBe(true)
    expect(country.error).toBe('Country must not be empty')
  })

  it('should fail if country is invalid', () => {
    const country = CountryValueObject.create({ value: 'invalid' })

    expect(country.isFailure).toBe(true)
    expect(country.error).toBe('Country is not valid')
  })
})
