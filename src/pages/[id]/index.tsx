import { BsCartPlus } from 'react-icons/bs'
import { FiMinus, FiPlus } from 'react-icons/fi'

import { InputField } from '@/components/common'
import { ProductRating } from '@/components/pages/home'
import { Util } from '@/utils'

export default function ProductDetails() {
  return (
    <main>
      <article>
        <div className='container'>
          <div className='bg-white grid grid-cols-12 p-4 gap-8'>
            <figure className='col-span-4 shadow'>
              <img
                className='w-full h-full object-cover'
                src='https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg'
                alt=''
              />
            </figure>
            <div className='col-span-8'>
              <h1 className='text-xl'>ĐIỆN THOẠI VSMART ACTIVE 3 6GB/64GB - HÀNG CHÍNH HÃNG</h1>
              <div className='mt-6 flex items-center gap-x-4'>
                <div className='flex gap-x-1 items-center text-lg'>
                  <span className='border-b border-solid border-b-primaryColor'>4.6</span>
                  <ProductRating rating={3} classNameStar='w-4' classNameStarActive='text-primaryColor' />
                </div>
                <div className='w-px h-4 bg-gray-300'></div>
                <div className='flex gap-x-1'>
                  <span>1,2k</span>
                  <span>Đã bán</span>
                </div>
              </div>
              <div className='bg-gray-100/70 mt-10 p-5 flex items-center gap-x-4'>
                <del className='flex items-start text-gray-500 line-through'>
                  <span className='text-xs leading-none'>₫</span>
                  <span className='text-lg leading-none'>{Util.formatCurrency(3990000)}</span>
                </del>
                <div className='flex items-start text-primaryColor'>
                  <span className='leading-normal font-medium'>₫</span>
                  <span className='text-3xl leading-none'>{Util.formatCurrency(3190000)}</span>
                </div>
                <mark className='uppercase p-1 bg-primaryColor text-white text-xs rounded-sm font-bold'>20% giảm</mark>
              </div>
              <div className='mt-7 flex items-center'>
                <div className='capitalize text-gray-500 text-lg'>Số lượng</div>
                <div className='flex ml-10'>
                  <button className='border border-gray-200 h-8 p-2 flex items-center justify-center'>
                    <FiMinus size={18} className='text-gray-500' />
                  </button>
                  <InputField
                    classNameContainer='shrink-0 w-14'
                    className='border-gray-200 h-8 w-full focus:!border-gray-200 focus:!shadow-none'
                    isErrorMessage={false}
                  />
                  <button className='border border-gray-200 h-8 p-2 flex items-center justify-center'>
                    <FiPlus size={18} className='text-gray-500' />
                  </button>
                </div>
                <div className='text-gray-500 ml-5'>138 Sản phẩm có sẵn</div>
              </div>
              <div className='mt-7 flex gap-x-4'>
                <button className='px-4 py-3 flex items-center text-primaryColor gap-x-3 border border-primaryColor bg-primaryColor/10 rounded-sm hover:bg-primaryColor/5 transition-colors'>
                  <BsCartPlus className='w-6 h-6' />
                  <span className='capitalize'>Thêm vào giỏ hàng</span>
                </button>
                <button className='px-12 py-3 flex items-center text-white gap-x-3 border border-primaryColor bg-primaryColor rounded-sm hover:opacity-90 transition-opacity'>
                  <span className='capitalize'>Mua ngay</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
