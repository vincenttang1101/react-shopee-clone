import { Products, ProductsConfig } from '@/types/product.type'
import { SuccessResponse } from '@/types/response.type'
import { HttpUtil } from '@/utils/http.util'

const URL = 'products'
const ProductApi = {
  getProducts: (params: ProductsConfig) => {
    return HttpUtil.get<SuccessResponse<Products>>(URL, {
      params: {
        ...params,
        limit: 20
      }
    })
  },
  getProductDetail: (id: string) => {
    return HttpUtil.get(`${URL}/${id}`)
  }
}

export default ProductApi
