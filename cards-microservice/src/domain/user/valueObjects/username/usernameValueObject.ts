import { Result, ValueObject } from '../../../shared/core'

const MIN_LENGTH = 3
const MAX_LENGTH = 30

const isValid = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,30}$/igm

export interface IUsernameValueObjectProps {
  value: string
}

export class UsernameValueObject extends ValueObject<IUsernameValueObjectProps> {
  get value (): string {
    return this.props.value
  }

  private constructor (props: IUsernameValueObjectProps) {
    super(props)
  }

  public static create (props: IUsernameValueObjectProps): Result<UsernameValueObject> {
    if (props.value.length === 0) return Result.fail<UsernameValueObject>('Username cannot be empty')

    if (props.value.length < MIN_LENGTH || props.value.length > MAX_LENGTH) return Result.fail<UsernameValueObject>(`Username must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters`)

    if (!isValid.test(props.value)) return Result.fail<UsernameValueObject>('Username is invalid. Only alphanumeric characters, underscores and dots are allowed.')

    return Result.ok<UsernameValueObject>(new UsernameValueObject(props))
  }
}
