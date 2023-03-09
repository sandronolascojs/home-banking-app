import { it, expect, describe } from 'vitest'

import { AccountAggregate } from './accountAggregate'
import { UniqueEntityID } from './shared'
import { AccountIdValueObject } from './valueObjects/accountId/accountId.valueObject'
import { AccountNumberValueObject } from './valueObjects/accountNumber/accountNumberValueObject'
import { AccountTypeValueObject } from './valueObjects/accountType/accountType.valueObject'
import { AliasValueObject } from './valueObjects/alias/alias.valueObject'
import { BalanceValueObject } from './valueObjects/balance/balanceValueObject'
import { CBUValueObject } from './valueObjects/cbu/cbuValueObject'
import { UserIdValueObject } from './valueObjects/userId/userIdValueObject'

describe('AccountAggregate', () => {
  it('should create a new account', () => {
    const accountNumberRaw = '1234567890123'
    const cbuRaw = [286, 0o0, 133, 9, accountNumberRaw, 1].join('')
    const aliasRaw = 'foca.pato.arroz'
    const id = AccountIdValueObject.create(new UniqueEntityID('e61f419a-4266-4840-8744-54d670b70f62')).getResult().id
    const account = {
      accountNumber: AccountNumberValueObject.create({ value: accountNumberRaw }).getResult(),
      accountType: AccountTypeValueObject.create({ value: 'personal' }).getResult(),
      alias: AliasValueObject.create({ value: aliasRaw }).getResult(),
      balance: BalanceValueObject.create({ value: 0 }).getResult(),
      cbu: CBUValueObject.create({ value: cbuRaw }).getResult(),
      userId: UserIdValueObject.create({ value: new UniqueEntityID('7b57a6bf-8301-46a2-9bd3-73e5f07db816') }).getResult()
    }

    const accountAggregate = AccountAggregate.create(account, id)

    expect(accountAggregate).toBeDefined()
    expect(accountAggregate.id.toValue()).toBe('e61f419a-4266-4840-8744-54d670b70f62')
  })
})
