import { Result, ValueObject } from '../../shared'

export enum accountType {
  'business',
  'personal'
}

export interface AccountTypeProps {
  value: string
}

export class AccountTypeValueObject extends ValueObject<AccountTypeProps> {
  private constructor (props: AccountTypeProps) {
    super(props)
  }

  get value (): string {
    return this.props.value
  }

  static create (props: AccountTypeProps): Result<AccountTypeValueObject> {
    if (props.value.length === 0) return Result.fail<AccountTypeValueObject>('Account type cannot be empty')

    const validation = Object.keys(accountType).includes(props.value)

    if (!validation) return Result.fail<AccountTypeValueObject>('Account type must be business or personal')

    return Result.ok<AccountTypeValueObject>(new AccountTypeValueObject(props))
  }
}
