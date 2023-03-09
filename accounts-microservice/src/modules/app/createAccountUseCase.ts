import { AccountAggregate } from '../domain/accountAggregate'
import { Result, type IUseCase, UniqueEntityID } from '../domain/shared'

import { AccountNumberValueObject } from '../domain/valueObjects/accountNumber/accountNumberValueObject'
import { AccountTypeValueObject } from '../domain/valueObjects/accountType/accountType.valueObject'
import { AliasValueObject } from '../domain/valueObjects/alias/alias.valueObject'
import { BalanceValueObject } from '../domain/valueObjects/balance/balanceValueObject'
import { CBUValueObject } from '../domain/valueObjects/cbu/cbuValueObject'
import { UserIdValueObject } from '../domain/valueObjects/userId/userIdValueObject'

import { accountNumberFabric } from '../shared/fabrics/accountNumber.fabric'
import { aliasFabric } from '../shared/fabrics/alias.fabric'

import { cbuFabric } from '../shared/fabrics/cbu.fabric'

export interface ICreateAccountRequestDto {
  accountType: string
  userId: string
}

export class CreateAccountUseCase implements IUseCase<ICreateAccountRequestDto, Result<AccountAggregate>> {
  async execute ({ accountType, userId }: ICreateAccountRequestDto): Promise<Result<AccountAggregate>> {
    const accountNumber = accountNumberFabric()
    const cbu = cbuFabric(accountNumber)
    const alias = aliasFabric()

    const accountTypeOrError = AccountTypeValueObject.create({ value: accountType })
    const accountNumberOrError = AccountNumberValueObject.create({ value: accountNumber })
    const aliasOrError = AliasValueObject.create({ value: alias })
    const balanceOrError = BalanceValueObject.create({ value: 0 })
    const cbuOrError = CBUValueObject.create({ value: cbu })
    const userIdOrError = UserIdValueObject.create({ value: new UniqueEntityID(userId) })

    const hasError = Result.combine([
      accountTypeOrError,
      accountNumberOrError,
      aliasOrError,
      balanceOrError,
      cbuOrError,
      userIdOrError
    ])

    if (hasError.isFailure) return Result.fail<AccountAggregate>(hasError.errorValue())

    const account = AccountAggregate.create({
      accountNumber: accountNumberOrError.getResult(),
      accountType: accountTypeOrError.getResult(),
      alias: aliasOrError.getResult(),
      balance: balanceOrError.getResult(),
      cbu: cbuOrError.getResult(),
      userId: userIdOrError.getResult()
    })

    return Result.ok<AccountAggregate>(account)
  }
}
