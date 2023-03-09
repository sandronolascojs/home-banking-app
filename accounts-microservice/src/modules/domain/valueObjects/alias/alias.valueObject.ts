import { ValueObject, Result } from '../../shared'

export interface AliasValueObjectProps {
  value: string
}

export class AliasValueObject extends ValueObject<AliasValueObjectProps> {
  private constructor (props: AliasValueObjectProps) {
    super(props)
  }

  get value (): string {
    return this.props.value
  }

  public static create (props: AliasValueObjectProps): Result<AliasValueObject> {
    const isValidAlias = typeof props.value === 'string' && props.value.length > 0

    if (!isValidAlias) return Result.fail<AliasValueObject>('Invalid alias')

    return Result.ok<AliasValueObject>(new AliasValueObject(props))
  }
}
