import { Result, ValueObject } from '../../../shared/core'

const isValid = /[^a-zA-Z-0-9-]/gm

export interface IUniqueIdentificationValueObjectProps {
  value: string
}

export class UniqueIdentificationValueObject extends ValueObject<IUniqueIdentificationValueObjectProps> {
  get value (): string {
    return this.props.value
  }

  private constructor (props: IUniqueIdentificationValueObjectProps) {
    super(props)
  }

  public static create (props: IUniqueIdentificationValueObjectProps): Result<UniqueIdentificationValueObject> {
    props = { value: props.value.trim() }

    if (props.value.length === 0) return Result.fail<UniqueIdentificationValueObject>('Unique identification must not be empty')

    if (isValid.test(props.value)) return Result.fail<UniqueIdentificationValueObject>('Unique identification is not valid')

    return Result.ok<UniqueIdentificationValueObject>(new UniqueIdentificationValueObject(props))
  }
}
