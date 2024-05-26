import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useMutation, useQuery } from '@tanstack/react-query'

import { PurchaseApi } from '@/apis'
import { Button, QuantityController } from '@/components/common'
import PurchaseConstant from '@/constants/purchase.constant'
import { AppContext } from '@/contexts'
import { Util } from '@/utils'

export default function Cart() {
  const location = useLocation()
  const choosenPurchaseIdFromLocation = (location.state as { purchaseId: string } | null)?.purchaseId

  const { extendedPurchases, setExtendedPurchases } = useContext(AppContext)

  const { data: purchasesIncartData, refetch } = useQuery({
    queryKey: ['purchases', { status: PurchaseConstant.inCart }],
    queryFn: () => PurchaseApi.getPurchases({ status: PurchaseConstant.inCart })
  })

  const purchasesIncart = useMemo(() => purchasesIncartData?.data?.data || [], [purchasesIncartData?.data?.data])
  const checkedPurchases = extendedPurchases.filter((purchase) => purchase.isChecked)
  const checkedPurchasesLength = checkedPurchases.length
  const totalPurchases = checkedPurchases.reduce((total, purchase) => total + purchase.buy_count * purchase.price, 0)
  const totalPurchasesSavingPrice = checkedPurchases.reduce(
    (total, purchase) => total + purchase.buy_count * (purchase.price_before_discount - purchase.price),
    0
  )

  const updatePurchaseMutation = useMutation({
    mutationFn: (body: { product_id: string; buy_count: number }) => PurchaseApi.updatePurchase(body),
    onSuccess: () => {
      refetch()
    }
  })

  const updatePurchase = (product_id: string, buy_count: number, index: number) => {
    extendedPurchases[index] = { ...extendedPurchases[index], isDisabled: true }
    setExtendedPurchases([...extendedPurchases])

    updatePurchaseMutation.mutate({ product_id, buy_count })
  }

  const buyPurchasesMutation = useMutation({
    mutationFn: (body: { product_id: string; buy_count: number }[]) => PurchaseApi.buyPurchases(body),
    onSuccess: (data) => {
      refetch()
      toast.success(data.data.message, {
        position: 'top-center',
        autoClose: 1000
      })
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
    extendedPurchases[index] = { ...extendedPurchases[index], isChecked: event.target.checked }
    setExtendedPurchases([...extendedPurchases])
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
        purchasesIncart?.map((purchase, index) => {
          const isChoosenPurchaseFromLocation = choosenPurchaseIdFromLocation === purchase._id

          return {
            ...purchase,
            isDisabled: false,
            isChecked: isChoosenPurchaseFromLocation || Boolean(prev[index]?.isChecked)
          }
        }) || []
      )
    })
  }, [choosenPurchaseIdFromLocation, purchasesIncart])

  useEffect(() => {
    return () => {
      history.replaceState(null, '')
    }
  }, [])

  return (
    <main className='bg-gray-200 py-10'>
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
                Chọn tất cả ({extendedPurchases.length})
              </label>
              <button className='text-lg hover:text-primaryColor' onClick={handleDeletePurchases}>
                Xoá
              </button>
            </div>
            <div className='col-span-7 flex justify-end gap-x-5 items-center'>
              <div className='flex flex-col'>
                <div className='flex justify-between gap-x-3'>
                  <div className='text-lg flex items-center gap-x-2'>
                    Tổng thanh toán ({checkedPurchasesLength}):
                    <div className='flex items-start text-primaryColor'>
                      <u className='text-lg leading-tight'>đ</u>
                      <span className='text-[25px]'>{Util.formatCurrency(totalPurchases)}</span>
                    </div>
                  </div>
                </div>
                <div className='flex justify-between text-lg'>
                  <span>Tiết kiệm</span>
                  <div className='text-primaryColor'>
                    <span className='text-xs leading-tight'>đ</span>
                    <span className='leading-none'>{Util.formatCurrency(totalPurchasesSavingPrice)}</span>
                  </div>
                </div>
              </div>
              <div>
                <Button
                  className='capitalize text-white min-w-[210px] h-[40px] px-4 bg-primaryColor rounded-sm hover:opacity-90'
                  onClick={buyPurchases}
                >
                  Mua hàng
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
