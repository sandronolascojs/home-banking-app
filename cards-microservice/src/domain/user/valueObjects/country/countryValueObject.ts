import { Result, ValueObject } from '../../../shared/core'
import { Country } from '../../enums/country.enum'

export interface ICountryValueObjectProps {
  value: string
}

export class CountryValueObject extends ValueObject<ICountryValueObjectProps> {
  get value (): string {
    return this.props.value
  }

  private constructor (props: ICountryValueObjectProps) {
    super(props)
  }

  public static create (props: ICountryValueObjectProps): Result<CountryValueObject> {
    if (props.value.length === 0) return Result.fail<CountryValueObject>('Country must not be empty')

    if (!Object.values(Country).includes(props.value as Country)) return Result.fail<CountryValueObject>('Country is not valid')

    return Result.ok<CountryValueObject>(new CountryValueObject(props))
  }
}
