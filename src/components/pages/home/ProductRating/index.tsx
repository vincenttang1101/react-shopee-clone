import { FaStar } from 'react-icons/fa'

import { twMerge } from 'tailwind-merge'

type Props = {
  rating: number
  classNameStar?: string
  classNameStarActive?: string
}

export default function ProductRating({ rating, classNameStar, classNameStarActive }: Props) {
  const handleWidth = (order: number) => {
    if (order <= rating) return '100%'
    else if (order > rating && order - rating < 1) {
      return (rating - Math.floor(rating)) * 100 + '%'
    } else return '0%'
  }

  return (
    <ul className='flex gap-x-px'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <li key={index} className={twMerge('relative w-3', classNameStar)}>
            <div className='absolute left-0 top-0 overflow-hidden' style={{ width: handleWidth(index + 1) }}>
              <FaStar className={twMerge('h-full w-full text-yellow-300', classNameStarActive)} />
            </div>
            <FaStar className='h-full w-full text-gray-300' />
          </li>
        ))}
    </ul>
  )
}
