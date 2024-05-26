import { Product } from '@/types/product.type'

export type PurchaseStatus = -1 | 1 | 2 | 3 | 4 | 5
export type PurchasesStatus = PurchaseStatus | 0

export interface Purchase {
  buy_count: number
  price: number
  price_before_discount: number
  status: number
  _id: string
  user: string
  product: Product
  createdAt: Date
  updatedAt: Date
}

export type ExtendedPurchase = Purchase & { isDisabled: boolean; isChecked: boolean }
