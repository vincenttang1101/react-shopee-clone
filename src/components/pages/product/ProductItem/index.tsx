import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa6'
import { Product } from '@/types/product.type'
import { formatCurrency, formatNumberToSocialStyle } from '@/utils/utils'

type ProductItem = {
  product: Product
}

export default function ProductItem({ product }: ProductItem) {
  return (
    <article className='rounded-sm bg-white shadow-sm transition-transform hover:-translate-y-0.5 hover:overflow-hidden hover:shadow-md'>
      <Link to='#!'>
        <figure className='relative w-full pt-[100%]'>
          <img className='absolute left-0 top-0' src={product.image} alt='Thumbnail' />
        </figure>
        <div className='p-3'>
          <h2 className='line-clamp-2 text-sm'>{product.name}</h2>
          <div className='mt-8 flex items-center gap-x-2'>
            <div className='flex items-center gap-x-px text-gray-500 line-through'>
              <span className='text-xs'>₫</span>
              <span>{formatCurrency(product.price_before_discount)}</span>
            </div>
            <div className='flex items-center gap-x-px text-primaryColor'>
              <span className='text-xs'>₫</span>
              <span>{formatCurrency(product.price)}</span>
            </div>
          </div>
          <div className='mt-3 flex items-center gap-x-2'>
            <div className='flex gap-x-px'>
              <div className='relative'>
                <div className='absolute left-0 top-0 overflow-hidden' style={{ width: '100%' }}>
                  <FaStar className='h-full w-3 text-yellow-300' />
                </div>
                <FaStar className='h-full w-3 text-gray-300' />
              </div>
              <div className='relative'>
                <div className='absolute left-0 top-0 overflow-hidden' style={{ width: '100%' }}>
                  <FaStar className='h-full w-3 text-yellow-300' />
                </div>
                <FaStar className='h-full w-3 text-gray-300' />
              </div>
              <div className='relative'>
                <div className='absolute left-0 top-0 overflow-hidden' style={{ width: '100%' }}>
                  <FaStar className='h-full w-3 text-yellow-300' />
                </div>
                <FaStar className='h-full w-3 text-gray-300' />
              </div>
              <div className='relative'>
                <div className='absolute left-0 top-0 overflow-hidden' style={{ width: '100%' }}>
                  <FaStar className='h-full w-3 text-yellow-300' />
                </div>
                <FaStar className='h-full w-3 text-gray-300' />
              </div>
              <div className='relative'>
                <div className='absolute left-0 top-0 overflow-hidden' style={{ width: '48.555%' }}>
                  <FaStar className='h-full w-3 text-yellow-300' />
                </div>
                <FaStar className='h-full w-3 text-gray-300' />
              </div>
            </div>
            <div className='text-sm'>Đã bán {formatNumberToSocialStyle(product.sold)}</div>
          </div>
        </div>
      </Link>
    </article>
  )
}
