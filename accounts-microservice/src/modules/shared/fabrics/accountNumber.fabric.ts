
export function accountNumberFabric (): string {
  const accountNumber = Math.floor(Math.random() * 1000000000000000)

  if (accountNumber.toString().length !== 13) return accountNumber.toString().slice(0, 13)

  return accountNumber.toString()
}
