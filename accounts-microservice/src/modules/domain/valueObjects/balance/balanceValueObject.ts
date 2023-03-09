import { ValueObject, Result } from '../../shared'

export interface BalanceProps {
  value: number
}

export class BalanceValueObject extends ValueObject<BalanceProps> {
  private constructor (props: BalanceProps) {
    super(props)
  }

  get value (): number {
    return this.props.value
  }

  static create (props: BalanceProps): Result<BalanceValueObject> {
    if (typeof props.value !== 'number') return Result.fail<BalanceValueObject>('Balance must be a number')

    if (props.value < 0) return Result.fail<BalanceValueObject>('Balance cannot be less than 0')

    return Result.ok<BalanceValueObject>(new BalanceValueObject(props))
  }
}
