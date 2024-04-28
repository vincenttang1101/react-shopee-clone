import { Link } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { PurchaseApi } from '@/apis'
import { Button, QuantityController } from '@/components/common'
import PurchaseConstant from '@/constants/purchase.constant'
import { Util } from '@/utils'

export default function Cart() {
  const { data: purchasesIncartData } = useQuery({
    queryKey: ['purchases', { status: PurchaseConstant.inCart }],
    queryFn: () => PurchaseApi.getPurchases({ status: PurchaseConstant.inCart })
  })
  const purchasesIncart = purchasesIncartData?.data.data

  return (
    <main>
      <div>
        <div className='container'>
          <div className='grid grid-cols-12 bg-white px-8 py-4 rounded-sm'>
            <div className='col-span-5 capitalize flex items-center gap-x-3'>
              <input type='checkbox' className='accent-primaryColor w-5 h-5 outline-red-500' />
              <span className='text-black'>Sản phẩm</span>
            </div>
            <div className='col-span-7 grid grid-cols-6 text-gray-500 text-center'>
              <div className='col-span-2'>Đơn giá</div>
              <div className='col-span-2'>Số lượng</div>
              <div className='col-span-1'>Số tiền</div>
              <div className='col-span-1'>Thao tác</div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4'>
        <div className='container'>
          {purchasesIncart?.map((purchase, index) => (
            <>
              <section key={purchase._id}>
                <div className='grid grid-cols-12 bg-white px-8 py-4 rounded-sm after:w-full'>
                  <div className='col-span-5 hover:text-primaryColor flex items-center gap-x-4'>
                    <div>
                      <input type='checkbox' className='accent-primaryColor w-5 h-5 outline-red-500' />
                    </div>
                    <Link
                      to={`/${Util.generateNameId(purchase.product.name, purchase.product._id)}`}
                      className='flex items-start gap-x-2'
                    >
                      <img src={purchase.product.image} alt={purchase.product.name} className='w-20 h-20' />
                      <h2 className='line-clamp-1 w-[70%] text-sm pt-2'>{purchase.product.name}</h2>
                    </Link>
                  </div>
                  <div className='col-span-7 grid grid-cols-6 text-gray-500 items-center'>
                    <div className='flex gap-x-3 col-span-2 justify-center'>
                      <div className='text-gray-400 flex items-start'>
                        <span className='text-xs leading-tight'>đ</span>
                        <del className='leading-none'>{Util.formatCurrency(purchase.price_before_discount)}</del>
                      </div>
                      <div className='flex items-start'>
                        <span className='text-xs leading-tight'>đ</span>
                        <span className='leading-none'>{Util.formatCurrency(purchase.price)}</span>
                      </div>
                    </div>
                    <div className='col-span-2 flex justify-center'>
                      <QuantityController
                        buyCount={purchase.buy_count}
                        maxQuantity={purchase.product.quantity}
                        className='ml-0'
                      />
                    </div>
                    <div className='text-primaryColor flex items-start col-span-1 justify-center'>
                      <span className='text-xs leading-tight'>đ</span>
                      <span className='leading-none'>{Util.formatCurrency(purchase.price * purchase.buy_count)}</span>
                    </div>
                    <div className='col-span-1 text-center'>
                      <button>Xoá</button>
                    </div>
                  </div>
                </div>
              </section>
              {index < purchasesIncart.length - 1 && <div className='w-full h-px bg-gray-200' />}
            </>
          ))}
        </div>
      </div>

      <div className='mt-7'>
        <div className='container'>
          <div className='grid grid-cols-12 bg-white px-8 py-4 rounded-sm'>
            <div className='col-span-5 capitalize flex items-center gap-x-3'>
              <input type='checkbox' className='accent-primaryColor w-5 h-5 outline-red-500' />
              <span className='capitalize text-lg'>Chọn tất cả</span>
            </div>
            <div className='col-span-7 flex items-center justify-end'>
              <span className='text-lg'>Tổng thanh toán: </span>
              <Button className='capitalize text-white min-w-[210px] h-[40px] px-4 bg-primaryColor rounded-sm'>
                Mua hàng
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
