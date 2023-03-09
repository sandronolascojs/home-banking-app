import { Result, type UniqueEntityID, Entity } from '../../shared'

export interface AccountIdProps {
  value: string
}

export class AccountIdValueObject extends Entity<any> {
  private constructor (id?: UniqueEntityID) {
    super(null, id)
  }

  get id (): UniqueEntityID {
    return this._id
  }

  public static create (id?: UniqueEntityID): Result<AccountIdValueObject> {
    return Result.ok<AccountIdValueObject>(new AccountIdValueObject(id))
  }
}
