import * as yup from 'yup'

function testPriceMinMax(this: yup.TestContext<yup.AnyObject>) {
  const { price_min, price_max } = this.parent as { price_min: string; price_max: string }
  if (price_min !== '' && price_max !== '') {
    return Number(price_max) >= Number(price_min)
  }
  return price_min !== '' || price_max !== ''
}

const RuleUtil = {
  authSchema: yup.object({
    email: yup.string().required('Vui lòng nhập email').email('Email không đúng định dạng'),
    password: yup
      .string()
      .required('Vui lòng nhập mật khẩu')
      .min(6, 'Độ dài mật khẩu phải từ 6 - 160 kí tự')
      .max(160, 'Độ dài mật khẩu phải từ 6 - 160 kí tự'),
    confirm_password: yup
      .string()
      .required('Vui lòng nhập lại mật khẩu')
      .oneOf([yup.ref('password')], 'Mật khẩu không khớp')
  }),
  priceRangeSchema: yup.object({
    price_min: yup.string().test({
      name: 'price-not-allowed',
      message: 'Giá không phù hợp',
      test: testPriceMinMax
    }),
    price_max: yup.string().test({
      name: 'price-not-allowed',
      message: 'Giá không phù hợp',
      test: testPriceMinMax
    })
  })
}
type IAuthSchema = yup.InferType<typeof RuleUtil.authSchema>
type PriceRangeSchema = yup.InferType<typeof RuleUtil.priceRangeSchema>

export { RuleUtil }
export type { IAuthSchema, PriceRangeSchema }
