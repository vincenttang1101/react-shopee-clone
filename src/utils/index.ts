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
  }
}

export { Util }
