import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useMutation, useQuery } from '@tanstack/react-query'
import { useImmer } from 'use-immer'

import { PurchaseApi } from '@/apis'
import { Button, QuantityController } from '@/components/common'
import PurchaseConstant from '@/constants/purchase.constant'
import { Purchase } from '@/types/purchase.type'
import { Util } from '@/utils'

type ExtendedPurchase = Purchase & { isDisabled: boolean; isChecked: boolean }

export default function Cart() {
  const [extendedPurchases, setExtendedPurchases] = useImmer<ExtendedPurchase[]>([])

  const { data: purchasesIncartData, refetch } = useQuery({
    queryKey: ['purchases', { status: PurchaseConstant.inCart }],
    queryFn: () => PurchaseApi.getPurchases({ status: PurchaseConstant.inCart })
  })

  const purchasesIncart = purchasesIncartData?.data?.data || []
  const checkedPurchases = extendedPurchases.filter((purchase) => purchase.isChecked)
  const checkedPurchasesLength = checkedPurchases.length
  const totalPurchases = checkedPurchases.reduce((total, purchase) => total + purchase.buy_count * purchase.price, 0)
  const totalPurchasesSavingPrice = checkedPurchases.reduce(
    (total, purchase) => total + purchase.buy_count * (purchase.price - purchase.price_before_discount),
    0
  )

  const updatePurchaseMutation = useMutation({
    mutationFn: (body: { product_id: string; buy_count: number }) => PurchaseApi.updatePurchase(body),
    onSuccess: () => {
      refetch()
    }
  })

  const updatePurchase = (product_id: string, buy_count: number, index: number) => {
    setExtendedPurchases((prev) => {
      prev[index].isDisabled = true
    })
    updatePurchaseMutation.mutate({ product_id, buy_count })
  }

  const buyPurchasesMutation = useMutation({
    mutationFn: (body: { product_id: string; buy_count: number }[]) => PurchaseApi.buyPurchases(body),
    onSuccess: () => {
      refetch()
    }
  })

  const deletePurchasesMutation = useMutation({
    mutationFn: (purchaseIds: string[]) => PurchaseApi.deletePurchases(purchaseIds),
    onSuccess: () => {
      refetch()
    }
  })

  const isCheckAll = extendedPurchases.every((purchase) => purchase.isChecked)

  const handleCheck = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    // extendedPurchases[index] = { ...extendedPurchases[index], isChecked: event.target.checked }
    // setExtendedPurchases([...extendedPurchases])

    setExtendedPurchases((draft) => {
      draft[index].isChecked = event.target.checked
    })
  }

  const handleCheckAll = () => {
    setExtendedPurchases(extendedPurchases.map((purchase) => ({ ...purchase, isChecked: !isCheckAll })))
  }

  const handleDeletePurchase = (purchase_id: string) => {
    deletePurchasesMutation.mutate([purchase_id])
  }

  const handleDeletePurchases = () => {
    const purchasesIds = checkedPurchases.map((purchase) => purchase._id)
    deletePurchasesMutation.mutate(purchasesIds)
  }

  const buyPurchases = () => {
    const purchases = checkedPurchases.map((purchase) => ({
      product_id: purchase.product._id,
      buy_count: purchase.buy_count
    }))
    buyPurchasesMutation.mutate(purchases)
  }

  useEffect(() => {
    setExtendedPurchases((prev) => {
      return (
        purchasesIncart?.map((purchase, index) => ({
          ...purchase,
          isDisabled: false,
          isChecked: Boolean(prev[index]?.isChecked)
        })) || []
      )
    })
  }, [purchasesIncart])

  return (
    <main>
      <div>
        <div className='container'>
          <div className='grid grid-cols-12 bg-white px-8 py-4 rounded-sm'>
            <div className='col-span-5 capitalize flex items-center gap-x-3'>
              <input
                type='checkbox'
                id='check_all_1'
                checked={isCheckAll}
                onChange={handleCheckAll}
                className='accent-primaryColor w-5 h-5 outline-red-500'
              />
              <label htmlFor='check_all_1' className='text-black cursor-pointer capitalize'>
                Sản phẩm
              </label>
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
          {extendedPurchases?.map((purchase, index) => (
            <React.Fragment key={purchase._id}>
              <section>
                <div className='grid grid-cols-12 bg-white px-8 py-4 rounded-sm after:w-full'>
                  <div className='col-span-5 hover:text-primaryColor flex items-center gap-x-4'>
                    <div>
                      <input
                        type='checkbox'
                        className='accent-primaryColor w-5 h-5 outline-red-500'
                        checked={purchase.isChecked}
                        onChange={handleCheck(index)}
                      />
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
                        onChangeQuantity={(quantity) => updatePurchase(purchase.product._id, quantity, index)}
                        disabled={purchase.isDisabled}
                      />
                    </div>
                    <div className='text-primaryColor flex items-start col-span-1 justify-center'>
                      <span className='text-xs leading-tight'>đ</span>
                      <span className='leading-none'>{Util.formatCurrency(purchase.price * purchase.buy_count)}</span>
                    </div>
                    <div className='col-span-1 text-center'>
                      <button onClick={() => handleDeletePurchase(purchase._id)}>Xoá</button>
                    </div>
                  </div>
                </div>
              </section>
              {index < purchasesIncart.length - 1 && <div className='w-full h-px bg-gray-200' />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className='mt-7'>
        <div className='container'>
          <div className='grid grid-cols-12 bg-white px-8 py-4 rounded-sm'>
            <div className='col-span-5 capitalize flex items-center gap-x-3 w-full' aria-hidden='true'>
              <input
                type='checkbox'
                id='check_all_2'
                className='accent-primaryColor w-5 h-5 outline-red-500'
                onChange={handleCheckAll}
              />
              <label htmlFor='check_all_2' className='capitalize text-lg cursor-pointer'>
                Chọn tất cả ({checkedPurchasesLength})
              </label>
              <button className='text-lg hover:text-primaryColor' onClick={handleDeletePurchases}>
                Xoá
              </button>
            </div>
            <div className='col-span-7 flex justify-end flex-col'>
              <div className='flex items-center gap-x-3'>
                <div className='text-lg flex items-center gap-x-2'>
                  Tổng thanh toán ({checkedPurchasesLength}):
                  <div className='flex items-start text-primaryColor'>
                    <u className='text-lg leading-tight'>đ</u>
                    <span className='text-[25px]'>{Util.formatCurrency(totalPurchases)}</span>
                  </div>
                </div>
                <Button
                  className='capitalize text-white min-w-[210px] h-[40px] px-4 bg-primaryColor rounded-sm'
                  onClick={buyPurchases}
                >
                  Mua hàng
                </Button>
              </div>
              <div className='flex'>
                <span>Tiết kiệm</span>
                <div className='text-primaryColor'>
                  <span className='text-xs leading-tight'>đ</span>
                  <span className='leading-none'>{Util.formatCurrency(totalPurchasesSavingPrice)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
