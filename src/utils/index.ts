const Util = {
  formatCurrency: (price: number) => {
    return new Intl.NumberFormat('de-DE').format(price)
  },
  formatNumberToSocialStyle: (price: number) => {
    return new Intl.NumberFormat('en', {
      notation: 'compact'
    })
      .format(price)
      .replace('.', ',')
      .toLocaleLowerCase()
  },
  calculateDiscountPercentage: (originalPrice: number, salePrice: number) => {
    return originalPrice === 0 ? 0 + '%' : Math.floor(((originalPrice - salePrice) / originalPrice) * 100) + '%'
  }
}
type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}

export { Util }
export type { NoUndefinedField }
