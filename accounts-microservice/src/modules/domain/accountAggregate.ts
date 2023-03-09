import { AggregateRoot, type BaseDomainEntity, type UniqueEntityID } from './shared'
import { type AccountNumberValueObject } from './valueObjects/accountNumber/accountNumberValueObject'
import { type AccountTypeValueObject } from './valueObjects/accountType/accountType.valueObject'
import { type AliasValueObject } from './valueObjects/alias/alias.valueObject'
import { type BalanceValueObject } from './valueObjects/balance/balanceValueObject'
import { type CBUValueObject } from './valueObjects/cbu/cbuValueObject'
import { type UserIdValueObject } from './valueObjects/userId/userIdValueObject'

export interface AccountAggregateProps extends BaseDomainEntity {
  accountNumber: AccountNumberValueObject
  accountType: AccountTypeValueObject
  alias: AliasValueObject
  balance: BalanceValueObject
  cbu: CBUValueObject
  userId: UserIdValueObject
}

export class AccountAggregate extends AggregateRoot<AccountAggregateProps> {
  private constructor (props: AccountAggregateProps, id?: UniqueEntityID) {
    super(props, id)
  }

  get id (): UniqueEntityID {
    return this._id
  }

  get accountNumber (): AccountNumberValueObject {
    return this.props.accountNumber
  }

  get accountType (): AccountTypeValueObject {
    return this.props.accountType
  }

  get alias (): AliasValueObject {
    return this.props.alias
  }

  get balance (): BalanceValueObject {
    return this.props.balance
  }

  get cbu (): CBUValueObject {
    return this.props.cbu
  }

  get userId (): UserIdValueObject {
    return this.props.userId
  }

  public static create (props: AccountAggregateProps, id?: UniqueEntityID): AccountAggregate {
    return new AccountAggregate(props, id)
  }
}
