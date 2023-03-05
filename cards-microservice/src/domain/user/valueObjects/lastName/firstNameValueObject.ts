import { Result, ValueObject } from '../../../shared/core'

const isValid = /[^a-zA-Z-]/gm

export interface IFirstNameValueObjectProps {
  value: string
}

export class FirstNameValueObject extends ValueObject<IFirstNameValueObjectProps> {
  get value (): string {
    return this.props.value
  }

  private constructor (props: IFirstNameValueObjectProps) {
    super(props)
  }

  public static create (props: IFirstNameValueObjectProps): Result<FirstNameValueObject> {
    props = { value: props.value.trim() }

    if (props.value.length === 0) return Result.fail<FirstNameValueObject>('First name must not be empty')

    if (isValid.test(props.value)) return Result.fail<FirstNameValueObject>('First name is not valid')

    return Result.ok<FirstNameValueObject>(new FirstNameValueObject(props))
  }
}
