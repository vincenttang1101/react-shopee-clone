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
  },
  generateNameId: (name: string, id: string) => {
    const normalizedName = name
      // eslint-disable-next-line no-useless-escape
      .replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')
      .replace(/\s+/g, ' ')
    return normalizedName.replace(/\s/g, '-') + `-i.${id}`
  },
  getIdFromNameId: (nameId: string) => {
    return nameId.split('-i.')[1]
  }
}

type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}

export { Util }
export type { NoUndefinedField }
