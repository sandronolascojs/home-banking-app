import { Result, ValueObject } from '../../../shared/core'

const PASSWORD_MIN_LENGTH = 6
const PASSWORD_MAX_LENGTH = 64

const isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,64}$/gm

export interface IPasswordValueObjectProps {
  value: string
}

export class PasswordValueObject extends ValueObject<IPasswordValueObjectProps> {
  get value (): string {
    return this.props.value
  }

  private constructor (props: IPasswordValueObjectProps) {
    super(props)
  }

  public static create (props: IPasswordValueObjectProps): Result<PasswordValueObject> {
    if (props.value.length === 0) return Result.fail<PasswordValueObject>('Password must not be empty')

    if (props.value.length < PASSWORD_MIN_LENGTH || props.value.length > PASSWORD_MAX_LENGTH) return Result.fail<PasswordValueObject>(`Password must be between ${PASSWORD_MIN_LENGTH} and ${PASSWORD_MAX_LENGTH} characters`)

    if (!isValid.test(props.value)) return Result.fail<PasswordValueObject>('Password must contain at least one uppercase letter, one lowercase letter and one number')

    return Result.ok<PasswordValueObject>(new PasswordValueObject(props))
  }
}
