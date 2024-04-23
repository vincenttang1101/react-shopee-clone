import { Purchase, PurchasesStatus } from '@/types/purchase.type'
import { SuccessResponse } from '@/types/response.type'
import { HttpUtil } from '@/utils/http.util'

const pathname = 'purchases'

const PurchaseApi = {
  addToCart: (body: { product_id: string; buy_count: number }) => {
    return HttpUtil.post<SuccessResponse<Purchase>>(`${pathname}/add-to-cart`, body)
  },
  getPurchases: (params: { status: PurchasesStatus }) => {
    return HttpUtil.get<SuccessResponse<Purchase[]>>(`${pathname}/purchases`, { params })
  }
}

export default PurchaseApi
