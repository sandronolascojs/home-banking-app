import { ValueObject, Result } from '../../shared'

export interface CBUProps {
  value: string
}

export class CBUValueObject extends ValueObject<CBUProps> {
  private constructor (props: CBUProps) {
    super(props)
  }

  get value (): string {
    return this.props.value
  }

  static create (props: CBUProps): Result<CBUValueObject> {
    if (typeof props.value !== 'string') return Result.fail<CBUValueObject>('CBU must be a string')

    if (props.value.length !== 22) return Result.fail<CBUValueObject>('CBU must have 22 characters')

    return Result.ok<CBUValueObject>(new CBUValueObject(props))
  }
}
