import { it, describe, expect } from 'vitest'

import { CreateAccountUseCase } from './createAccountUseCase'

const useCase = new CreateAccountUseCase()
describe('createAccountUseCase', () => {
  it('should create an account', async () => {
    const user = { accountType: 'personal', userId: 'cf5b48da-2bfd-432a-ba10-edf6b90ced70' }

    const result = await useCase.execute(user)

    expect(result).not.toBe(null)
    expect(result.getResult().id).not.toBe(null)
    expect(result.getResult().balance.value).toBe(0)
    expect(result.getResult().userId.value.toValue()).toBe('cf5b48da-2bfd-432a-ba10-edf6b90ced70')
  })
})
