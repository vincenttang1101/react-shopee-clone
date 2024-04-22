import { Link } from 'react-router-dom'

import { ProductRating } from '@/components/pages/home'
import { Product } from '@/types/product.type'
import { Util } from '@/utils'

type ProductItemProps = {
  product: Product
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <article className='rounded-sm bg-white shadow-sm transition-transform hover:-translate-y-0.5 hover:overflow-hidden hover:shadow-md'>
      <Link to={`${Util.generateNameId(product.name, product._id)}`}>
        <figure className='relative w-full pt-[100%]'>
          <img className='absolute left-0 top-0 h-full w-full' src={product.image} alt='Thumbnail' />
        </figure>
        <div className='p-3'>
          <h2 className='line-clamp-2 text-sm'>{product.name}</h2>
          <div className='mt-8 flex items-center gap-x-2'>
            <div className='flex items-center gap-x-px text-gray-500 line-through'>
              <span className='text-xs'>₫</span>
              <span>{Util.formatCurrency(product.price_before_discount)}</span>
            </div>
            <div className='flex items-center gap-x-px text-primaryColor'>
              <span className='text-xs'>₫</span>
              <span>{Util.formatCurrency(product.price)}</span>
            </div>
          </div>
          <div className='mt-3 flex items-center gap-x-2'>
            <div className='flex gap-x-px'>
              <ProductRating rating={product.rating} />
            </div>
            <div className='text-sm'>Đã bán {Util.formatNumberToSocialStyle(product.sold)}</div>
          </div>
        </div>
      </Link>
    </article>
  )
}
