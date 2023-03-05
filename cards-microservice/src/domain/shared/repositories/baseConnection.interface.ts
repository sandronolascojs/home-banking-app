import { type Filter } from './filter.interface'

export interface IBaseConnection<Entity> {
  find: (filter: Filter) => Promise<Entity[] | null>
  delete: (filter: Filter) => Promise<void>
  exists: (filter: Filter) => Promise<boolean>
  save: (target: Entity) => Promise<void>
}
