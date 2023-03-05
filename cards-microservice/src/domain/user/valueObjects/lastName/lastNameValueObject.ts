import { Result, ValueObject } from '../../../shared/core'

const isValid = /[^a-zA-Z-]/gm

export interface ILastNameValueObjectProps {
  value: string
}

export class LastNameValueObject extends ValueObject<ILastNameValueObjectProps> {
  get value (): string {
    return this.props.value
  }

  private constructor (props: ILastNameValueObjectProps) {
    super(props)
  }

  public static create (props: ILastNameValueObjectProps): Result<LastNameValueObject> {
    props = { value: props.value.trim() }

    if (props.value.length === 0) return Result.fail<LastNameValueObject>('First name must not be empty')

    if (isValid.test(props.value)) return Result.fail<LastNameValueObject>('First name is not valid')

    return Result.ok<LastNameValueObject>(new LastNameValueObject(props))
  }
}
