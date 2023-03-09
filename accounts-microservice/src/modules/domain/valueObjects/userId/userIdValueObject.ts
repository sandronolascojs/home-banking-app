import { Result, type UniqueEntityID, ValueObject } from '../../shared'

export interface UserIdValueObjectProps {
  value: UniqueEntityID
}

export class UserIdValueObject extends ValueObject<UserIdValueObjectProps> {
  private constructor (props: UserIdValueObjectProps) {
    super(props)
  }

  get value (): UniqueEntityID {
    return this.props.value
  }

  public static create (props: UserIdValueObjectProps): Result<UserIdValueObject> {
    if (props.value.toString().length === 0) return Result.fail<UserIdValueObject>('User id is required')

    return Result.ok<UserIdValueObject>(new UserIdValueObject(props))
  }
}
