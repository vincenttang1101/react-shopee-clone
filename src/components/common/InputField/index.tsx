import { InputHTMLAttributes } from 'react'
import type { UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

type InputField = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string
  register?: UseFormRegister<any>
}

export default function InputField({ className, name, errorMessage, register, ...rest }: InputField) {
  const classes = clsx(
    'p-5 w-full rounded-sm',
    'text-2xl border border-solid border-slate-300',
    'bg-white focus:outline-none focus:border',
    'focus:border-solid focus:border-slate-900 focus:shadow-md',
    {
      'focus:border-red-400 border-red-400 bg-red-50 shadow-md': Boolean(errorMessage)
    },
    className
  )

  const newRegister = register && name ? register(name) : {}

  return (
    <>
      <input className={classes} {...newRegister} {...rest} />
      {errorMessage && <p className='min-h-[2rem] text-[1.3rem] text-[#ff424f]'>{errorMessage}</p>}
    </>
  )
}
