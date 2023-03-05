import { Entity } from './entity'
import { UniqueEntityID } from './uniqueEntityId'

export class DomainId extends Entity<any> {
  private constructor (id?: UniqueEntityID) {
    super(null, id)
  }

  get id (): UniqueEntityID {
    return this._id
  }

  public static create (id?: string | number): DomainId {
    return new DomainId(new UniqueEntityID(id))
  }
}
