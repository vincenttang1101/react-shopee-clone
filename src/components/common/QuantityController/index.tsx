import { InputHTMLAttributes, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { InputField } from '@/components/common'

type QuantityControllerProps = {
  buyCount: number
  maxQuantity: number
  onChangeQuantity?: (value: number) => void
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export default function QuantityController({
  buyCount,
  maxQuantity,
  onChangeQuantity,
  className,
  disabled,
  ...rest
}: QuantityControllerProps) {
  const [quantity, setQuantity] = useState(buyCount)

  const onChangeQuantityExists = (value: number) => {
    onChangeQuantity && onChangeQuantity(value)
  }

  const handleDescrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      onChangeQuantityExists(quantity - 1)
    }
  }

  const handleIncrease = () => {
    if (quantity > maxQuantity) setQuantity(maxQuantity)
    else {
      setQuantity(quantity + 1)
      onChangeQuantityExists(quantity + 1)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    if (value > maxQuantity) {
      setQuantity(maxQuantity)
      onChangeQuantityExists(maxQuantity)
    } else if (value < 1) {
      setQuantity(1)
      onChangeQuantityExists(1)
    } else {
      setQuantity(value)
      onChangeQuantityExists(value)
    }
  }

  return (
    <div className={twMerge('flex', className)}>
      <button
        className={clsx('border border-gray-200 h-8 p-2 flex items-center justify-center', {
          'cursor-not-allowed': disabled
        })}
      >
        <FiMinus size={18} className='text-gray-500' onClick={handleDescrease} />
      </button>
      <InputField
        classNameContainer='shrink-0 w-14'
        className='border-gray-200 h-8 w-full focus:!border-gray-200 focus:!shadow-none text-center'
        type='number'
        isErrorMessage={false}
        value={quantity.toString()}
        onChange={handleChange}
        {...rest}
      />
      <button
        className={clsx('border border-gray-200 h-8 p-2 flex items-center justify-center', {
          'cursor-not-allowed': disabled
        })}
      >
        <FiPlus size={18} className='text-gray-500' onClick={handleIncrease} />
      </button>
    </div>
  )
}
