import { type IBaseConnection } from './baseConnection.interface'
import { type Filter } from './filter.interface'
import { type IMapper } from './mapper.interface'

interface IBaseRepository<DomainAggregate> {
  find: (filter: Filter) => Promise<DomainAggregate[] | null>
  delete: (filter: Filter) => Promise<void>
  exists: (filter: Filter) => Promise<boolean>
  save: (target: DomainAggregate) => Promise<void>
}

abstract class BaseRepository<DomainAggregate, Entity>
implements IBaseRepository<DomainAggregate> {
  constructor (
    protected readonly connection: IBaseConnection<Entity>,
    protected readonly mapper: IMapper<DomainAggregate, Entity>
  ) {}

  //
  async find (filter: Filter): Promise<DomainAggregate[] | null> {
    const targets = await this.connection.find(filter)
    if (targets === null) {
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
    const exist = this.connection.exists(filter)
    return exist !== null
  }

  //
  async save (target: DomainAggregate): Promise<void> {
    const persistenceValue = this.mapper.toPersistence(target)
    await this.connection.save(persistenceValue)
  }
}

export interface IRepository<DomainAggregate, Entity>
  extends BaseRepository<DomainAggregate, Entity> {}
