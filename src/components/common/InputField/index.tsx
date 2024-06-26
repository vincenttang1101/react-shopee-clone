import { InputHTMLAttributes } from 'react'
import type { UseFormRegister } from 'react-hook-form'

import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type InputField = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string
  register?: UseFormRegister<any>
  isErrorMessage?: boolean
  classNameContainer?: string
}

export default function InputField({
  className,
  name,
  errorMessage,
  register,
  isErrorMessage = true,
  classNameContainer,
  ...rest
}: InputField) {
  const classes = clsx(
    'p-2 w-full rounded-sm',
    'border border-solid border-gray-300',
    'bg-white focus:outline-none focus:border',
    'focus:border-solid focus:border-slate-900 focus:shadow-md',
    {
      'border-red-400 focus:!border-red-400 bg-red-50 shadow-md': Boolean(errorMessage)
    },
    className
  )

  const newRegister = register && name ? register(name) : {}

  return (
    <div className={twMerge(classNameContainer)}>
      <input className={classes} {...newRegister} {...rest} />
      {isErrorMessage && <p className='min-h-[2rem] text-lg text-[#ff424f]'>{errorMessage}</p>}
    </div>
  )
}
