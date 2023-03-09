import type IBaseConnection from './base-connection.interface'
import type Filter from './filter.interface'
import type IMapper from './mapper.interface'

export interface IBaseRepository<DomainAggregate> {
  find: (filter: Filter) => Promise<DomainAggregate[] | null>
  delete: (filter: Filter) => Promise<void>
  exists: (filter: Filter) => Promise<boolean>
  save: (target: DomainAggregate) => Promise<void>
}

export abstract class BaseRepository<DomainAggregate, Entity, ORM>
implements IBaseRepository<DomainAggregate> {
  constructor (
    protected readonly connection: IBaseConnection<Entity, ORM>,
    protected readonly mapper: IMapper<DomainAggregate, Entity>
  ) {}

  //
  async find (filter: Filter): Promise<DomainAggregate[] | null> {
    const targets = await this.connection.find(filter)
    if (targets == null) {
      return null
    }
    return targets.map(this.mapper.toDomain)
  }

  //
  async delete (filter: Filter): Promise<void> {
    await this.connection.delete(filter)
  }

  //
  async exists (filter: Filter): Promise<boolean> {
    const exist = await this.connection.exists(filter)
    return !!exist
  }

  //
  async save (target: DomainAggregate): Promise<void> {
    const persistenceValue = this.mapper.toPersistence(target)
    await this.connection.save(persistenceValue)
  }
}

export default interface IRepository<DomainAggregate, Entity, ORM>
  extends BaseRepository<DomainAggregate, Entity, ORM> {}

export type { IRepository }
