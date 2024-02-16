import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type Field = 'email' | 'password' | 'confirm_password'
type Rules = {
  [key in Field]?: RegisterOptions
}

export const getRules = (getValues?: UseFormGetValues<Rules>): Rules => ({
  email: {
    required: 'Vui lòng nhập email',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    minLength: {
      value: 5,
      message: 'Độ dài tối thiểu ít nhất 5 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài tối đa chỉ 160 kí tự'
    }
  },
  password: {
    required: 'Vui lòng nhập password',
    minLength: {
      value: 6,
      message: 'Độ dài tối thiểu ít nhất 6 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài tối đa chỉ 160 kí tự'
    }
  },
  confirm_password: {
    required: 'Vui lòng xác nhận password',
    validate:
      typeof getValues === 'function' ? (value) => getValues('password') === value || 'Password không khớp' : undefined
  }
})

export const registerSchema = yup.object({
  email: yup.string().required('Vui lòng nhập email').email('Email không đúng định dạng'),
  password: yup
    .string()
    .required('Vui lòng nhập password')
    .min(6, 'Độ dài password phải từ 6 - 160 kí tự')
    .max(160, 'Độ dài password phải từ 6 - 160 kí tự'),
  confirm_password: yup
    .string()
    .required('Vui lòng nhập lại password')
    .oneOf([yup.ref('password')], 'Password không khớp')
})

export const loginSchema = registerSchema.omit(['confirm_password'])

export type IRegisterSchema = yup.InferType<typeof registerSchema>
export type ILoginSchema = yup.InferType<typeof loginSchema>
