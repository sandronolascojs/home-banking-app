import { randomUUID } from 'node:crypto'
import Identifier from './identifier'

/**
 * @param id is optional as string.
 * If id is provided returns itself else generate a new uuid
 */
export default class UniqueEntityID extends Identifier<string | number> {
  constructor (id?: string | number) {
    super(id ?? randomUUID())
  }
}

export { UniqueEntityID }
