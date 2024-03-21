import { SuccessResponse } from '@/types/response.type'
import { Products, ProductsConfig } from '@/types/product.type'
import { http } from '@/utils/http.util'

const URL = 'products'
const productApi = {
  getProducts(params: ProductsConfig) {
    return http.get<SuccessResponse<Products>>(URL, {
      params
    })
  },
  getProductDetail(id: string) {
    return http.get(`${URL}/${id}`)
  }
}

export default productApi
