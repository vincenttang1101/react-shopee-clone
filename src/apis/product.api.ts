import { Product, Products, ProductsConfig } from '@/types/product.type'
import { SuccessResponse } from '@/types/response.type'
import { HttpUtil } from '@/utils/http.util'

const pathname = 'products'
const ProductApi = {
  getProducts: (params: ProductsConfig) => {
    return HttpUtil.get<SuccessResponse<Products>>(pathname, { params })
  },
  getProductDetail: (id: string) => {
    return HttpUtil.get<SuccessResponse<Product>>(`${pathname}/${id}`)
  }
}

export default ProductApi
