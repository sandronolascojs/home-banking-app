export interface IMapper<DomainAggregate, Entity> {
  toDomain: (target: Entity) => DomainAggregate
  toPersistence: (target: DomainAggregate) => Entity
}
