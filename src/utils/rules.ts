import type { RegisterOptions } from 'react-hook-form'

type Field = 'email' | 'password' | 'confirm_password'
type Rules = {
  [key in Field]?: RegisterOptions
}

export const rules: Rules = {
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
    required: 'Không khớp với password'
  }
}
