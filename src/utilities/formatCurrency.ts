const CURRENCY_FORMATTER = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  minimumFractionDigits: 2,
})

export const formatCurrency = (number: number) => {
  const price = CURRENCY_FORMATTER.format(number)
  return price
}
