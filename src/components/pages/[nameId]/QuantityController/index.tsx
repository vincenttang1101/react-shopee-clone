import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

import { InputField } from '@/components/common'

export default function QuantityController({ quantity: maxQuantity }: { quantity: number }) {
  const [quantity, setQuantity] = useState(1)

  const handleDescrease = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const handleIncrease = () => {
    if (quantity > maxQuantity) setQuantity(maxQuantity)
    else setQuantity(quantity + 1)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    if (value > maxQuantity) setQuantity(maxQuantity)
    else if (value < 1) setQuantity(1)
    else setQuantity(value)
  }

  return (
    <div className='flex ml-10'>
      <button className='border border-gray-200 h-8 p-2 flex items-center justify-center'>
        <FiMinus size={18} className='text-gray-500' onClick={handleDescrease} />
      </button>
      <InputField
        classNameContainer='shrink-0 w-14'
        className='border-gray-200 h-8 w-full focus:!border-gray-200 focus:!shadow-none text-center'
        type='number'
        isErrorMessage={false}
        value={quantity.toString()}
        onChange={handleChange}
      />
      <button className='border border-gray-200 h-8 p-2 flex items-center justify-center'>
        <FiPlus size={18} className='text-gray-500' onClick={handleIncrease} />
      </button>
    </div>
  )
}
