export function formatCurrency(price: number) {
  return new Intl.NumberFormat('de-DE').format(price)
}

export function formatNumberToSocialStyle(price: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact'
  })
    .format(price)
    .replace('.', ',')
    .toLocaleLowerCase()
}
