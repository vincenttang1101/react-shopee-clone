import { useQuery } from '@tanstack/react-query'

import { PurchaseApi } from '@/apis'
import PurchaseConstant from '@/constants/purchase.constant'

export default function Cart() {
  const { data: purchasesIncartData } = useQuery({
    queryKey: ['purchases', { status: PurchaseConstant.inCart }],
    queryFn: () => PurchaseApi.getPurchases({ status: PurchaseConstant.inCart })
  })

  const purchasesIncart = purchasesIncartData?.data.data

  return (
    <main>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-6 capitalize'>
            <input type='checkbox' className='accent-primaryColor w-5 h-5 outline-red-500' />
            <span className='text-black'>Sản phẩm</span>
          </div>
          <div className='col-span-6 text-gray-400 flex justify-between'>
            <span>Đơn giá</span>
            <span>Số lượng</span>
            <span>Số tiền</span>
            <span>Thao tác</span>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-6'></div>
        <div className='col-span-6'></div>
      </div>
    </main>
  )
}
