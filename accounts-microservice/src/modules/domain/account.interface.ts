
export type accountType = 'business' | 'personal'

export interface IAccount {
  id: string
  userId: string
  type: accountType
  cbu: number
  alias: string
  balance: number
}
