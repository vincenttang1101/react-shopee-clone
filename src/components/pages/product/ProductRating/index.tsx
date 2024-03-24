import { FaStar } from 'react-icons/fa'

export default function ProductRating({ rating }: { rating: number }) {
  const handleWidth = (order: number) => {
    if (order <= rating) return '100%'
    else if (order > rating && order - rating < 1) {
      return (rating - Math.floor(rating)) * 100 + '%'
    }
  }

  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className='relative' key={index}>
            <div className='absolute left-0 top-0 overflow-hidden' style={{ width: handleWidth(index + 1) }}>
              <FaStar className='h-full w-3 text-yellow-300' />
            </div>
            <FaStar className='h-full w-3 text-gray-300' />
          </div>
        ))}
    </>
  )
}
