import { useRef, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useParams } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import { ProductApi } from '@/apis'
import { InputField } from '@/components/common'
import { ProductRating } from '@/components/pages/home'
import { Util } from '@/utils'

import 'swiper/css'

export default function ProductDetails() {
  const { id } = useParams()
  const { data: productDetailsData } = useQuery({
    queryKey: ['product', id],
    queryFn: () => ProductApi.getProductDetail(id as string)
  })
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(productDetailsData?.data.data.images[0])
  const swiperRef = useRef<SwiperClass>()

  const product = productDetailsData?.data.data

  return (
    <main>
      <article>
        <div className='container'>
          <div className='bg-white grid grid-cols-12 p-4 gap-8 rounded-sm'>
            <div className='col-span-5'>
              <figure className='shadow'>
                <img className='w-full h-full object-cover' src={product?.image} alt='' />
              </figure>
              <div className='relative mt-5'>
                <button
                  className='absolute z-10 top-1/2 left-0 -translate-y-1/2 py-2 px-1 bg-black/30'
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <FaChevronLeft className='text-white' />
                </button>
                <Swiper
                  slidesPerView={5}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper
                  }}
                >
                  {product?.images?.map((image) => (
                    <SwiperSlide
                      key={image}
                      className={`border-2 ${activeImage === image ? 'border-primaryColor' : 'border-transparent'} w-24 h-24 shrink-0 cursor-pointer`}
                      aria-hidden='true'
                      onClick={() => setActiveImage(image)}
                    >
                      <img className='w-full h-full object-cover' src={image} alt='' />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  className='absolute z-10 top-1/2 right-0 -translate-y-1/2 py-2 px-1 bg-black/30'
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <FaChevronRight className='text-white' />
                </button>
              </div>
            </div>
            <div className='col-span-7'>
              <h1 className='text-xl'>{product?.name}</h1>
              <div className='mt-6 flex items-center gap-x-4'>
                <div className='flex gap-x-1 items-center text-lg'>
                  <span className='border-b border-solid border-b-primaryColor'>4.6</span>
                  <ProductRating
                    rating={product?.rating || 0}
                    classNameStarActive='text-primaryColor h-5 w-5'
                    classNameStarNonActive='h-5 w-5'
                  />
                </div>
                <div className='w-px h-4 bg-gray-300'></div>
                <div className='flex gap-x-1'>
                  <span>{Util.formatNumberToSocialStyle(product?.sold || 0)}</span>
                  <span>Đã bán</span>
                </div>
              </div>
              <div className='bg-gray-100/70 mt-10 p-5 flex items-center gap-x-4'>
                <del className='flex items-start text-gray-500 line-through'>
                  <span className='text-xs leading-none'>₫</span>
                  <span className='text-lg leading-none'>
                    {Util.formatCurrency(product?.price_before_discount || 0)}
                  </span>
                </del>
                <div className='flex items-start text-primaryColor'>
                  <span className='leading-normal font-medium'>₫</span>
                  <span className='text-3xl leading-none'>{Util.formatCurrency(product?.price || 0)}</span>
                </div>
                <mark className='uppercase p-1 bg-primaryColor text-white text-xs rounded-sm font-bold'>
                  {Util.calculateDiscountPercentage(product?.price_before_discount || 0, product?.price || 0)} giảm
                </mark>
              </div>
              <div className='mt-7 flex items-center'>
                <div className='capitalize text-gray-500 text-lg'>Số lượng</div>
                <div className='flex ml-10'>
                  <button className='border border-gray-200 h-8 p-2 flex items-center justify-center'>
                    <FiMinus
                      size={18}
                      className='text-gray-500'
                      onClick={() => {
                        if (quantity >= 1) setQuantity(quantity - 1)
                      }}
                    />
                  </button>
                  <InputField
                    classNameContainer='shrink-0 w-14'
                    className='border-gray-200 h-8 w-full focus:!border-gray-200 focus:!shadow-none text-center'
                    isErrorMessage={false}
                    value={quantity}
                  />
                  <button className='border border-gray-200 h-8 p-2 flex items-center justify-center'>
                    <FiPlus
                      size={18}
                      className='text-gray-500'
                      onClick={() => {
                        if (quantity < product!.quantity) setQuantity(quantity + 1)
                      }}
                    />
                  </button>
                </div>
                <div className='text-gray-500 ml-5'>{product?.view} Sản phẩm có sẵn</div>
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

      <section className='mt-8'>
        <div className='container'>
          <div className='bg-white p-7 rounded-sm'>
            <div className='py-2 px-3 bg-gray-50 rounded-sm'>
              <h2 className='uppercase text-xl font-medium'>Mô tả sản phẩm</h2>
            </div>
            <div
              className='mt-4 px-3 flex flex-col gap-y-4'
              dangerouslySetInnerHTML={{
                __html: product?.description as string
              }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
