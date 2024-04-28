import { useEffect, useRef, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useMutation, useQuery } from '@tanstack/react-query'
import DOMPurify from 'dompurify'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import { ProductApi, PurchaseApi } from '@/apis'
import { QuantityController } from '@/components/common'
import { ProductItem, ProductRating } from '@/components/pages/home'
import PurchaseConstant from '@/constants/purchase.constant'
import { queryClient } from '@/main'
import { ProductsConfig } from '@/types/product.type'
import { Util } from '@/utils'

import 'swiper/css'

export default function ProductDetails() {
  const { nameId } = useParams()
  const [activeImage, setActiveImage] = useState('')
  const swiperRef = useRef<SwiperClass>()
  const imageRef = useRef<HTMLImageElement>(null)
  const [quantity, setQuantity] = useState(1)

  const id = Util.getIdFromNameId(nameId as string)
  const { data: productDetailsData } = useQuery({
    queryKey: ['product', id],
    queryFn: () => ProductApi.getProductDetail(id)
  })
  const product = productDetailsData?.data?.data

  const queryConfig: ProductsConfig = { page: '1', limit: '20', category: product?.category?._id }

  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return ProductApi.getProducts(queryConfig)
    },
    enabled: Boolean(product),
    staleTime: 3 * 60 * 1000
  })

  const products = productsData?.data?.data
  const handleZoom = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const image = imageRef.current as HTMLImageElement
    const { naturalWidth, naturalHeight } = image
    /* Cách 1: Lấy offsetX, offsetY khi chúng ta xử lý được bubble event */
    const { offsetX, offsetY } = event.nativeEvent

    /* Cách 2: Lấy offsetX, offsetY khi chúng ta không xử lý được bubble event 
    const offsetX = event.pageX - (rect.x + window.scrollX)
    const offsetY = event.pageY - (rect.y + window.scrollY) */

    const top = offsetY * (1 - naturalHeight / rect.height)
    const left = offsetX * (1 - naturalWidth / rect.width)

    image.style.width = naturalWidth + 'px'
    image.style.height = naturalHeight + 'px'
    image.style.top = top + 'px'
    image.style.left = left + 'px'
  }

  const handleRemoveZoom = () => {
    imageRef.current?.removeAttribute('style')
  }

  const addToCartMutation = useMutation({
    mutationFn: (body: { product_id: string; buy_count: number }) => PurchaseApi.addToCart(body),
    onSuccess: (data) => {
      toast.success(data.data.message, {
        autoClose: 1000
      })
      queryClient.invalidateQueries({ queryKey: ['purchases', { status: PurchaseConstant.inCart }] })
    }
  })

  const addToCart = () => {
    addToCartMutation.mutate({ product_id: product?._id as string, buy_count: quantity })
  }

  useEffect(() => {
    if (product?.images && product.images.length > 0) {
      setActiveImage(product.images[0])
    }
  }, [product?.images, productDetailsData])

  return (
    <main>
      <article>
        <div className='container'>
          <div className='bg-white grid grid-cols-12 p-4 gap-8 rounded-sm'>
            <div className='col-span-5'>
              <figure
                className='shadow overflow-hidden aspect-square w-full cursor-zoom-in'
                onMouseMove={handleZoom}
                onMouseLeave={handleRemoveZoom}
              >
                <img
                  ref={imageRef}
                  className='relative w-full h-full pointer-events-none'
                  src={activeImage}
                  alt={activeImage}
                />
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
                <span className='uppercase p-1 bg-primaryColor text-white text-xs rounded-sm font-bold'>
                  {Util.calculateDiscountPercentage(product?.price_before_discount || 0, product?.price || 0)} giảm
                </span>
              </div>
              <div className='mt-7 flex items-center'>
                <div className='capitalize text-gray-500 text-lg'>Số lượng</div>
                <QuantityController
                  quantity={quantity}
                  setQuantity={setQuantity}
                  maxQuantity={product?.quantity || 0}
                />
                <div className='text-gray-500 ml-5'>{product?.quantity} Sản phẩm có sẵn</div>
              </div>
              <div className='mt-7 flex gap-x-4'>
                <button
                  className='px-4 py-3 flex items-center text-primaryColor gap-x-3 border border-primaryColor bg-primaryColor/10 rounded-sm hover:bg-primaryColor/5 transition-colors'
                  onClick={addToCart}
                >
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
                __html: DOMPurify.sanitize(product?.description as string)
              }}
            />
          </div>
        </div>
      </section>

      <section className='mt-8'>
        <div className='container'>
          <h2 className='uppercase text-gray-500 text-lg'>Có thể bạn cũng thích</h2>
          <ul className='mt-4 grid grid-cols-6 gap-3'>
            {products?.products?.map((product) => (
              <li key={product._id}>
                <ProductItem key={product._id} product={product} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
