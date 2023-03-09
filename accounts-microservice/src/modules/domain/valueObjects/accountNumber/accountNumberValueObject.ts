import { Result, ValueObject } from '../../shared'

const ACCOUNT_NUMBER_LENGTH = 13

export interface AccountNumberValueObjectProps {
  value: string
}

export class AccountNumberValueObject extends ValueObject<AccountNumberValueObjectProps> {
  private constructor (props: AccountNumberValueObjectProps) {
    super(props)
  }

  get value (): string {
    return this.props.value
  }

  public static create (props: AccountNumberValueObjectProps): Result<AccountNumberValueObject> {
    if (isNaN(Number(props.value))) return Result.fail<AccountNumberValueObject>('Account number must be a number')

    if (props.value.length === 0) return Result.fail<AccountNumberValueObject>('Account number is required')

    if (props.value.length !== ACCOUNT_NUMBER_LENGTH) return Result.fail<AccountNumberValueObject>(`Account number must be ${ACCOUNT_NUMBER_LENGTH} digits`)

    return Result.ok<AccountNumberValueObject>(new AccountNumberValueObject(props))
  }
}
