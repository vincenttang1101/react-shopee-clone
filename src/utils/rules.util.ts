import * as yup from 'yup'

const authSchema = yup.object({
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
})

type IAuthSchema = yup.InferType<typeof authSchema>

export { authSchema, type IAuthSchema }
