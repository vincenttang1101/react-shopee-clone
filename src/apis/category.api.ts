import { Category } from '@/types/category.type'
import { SuccessResponse } from '@/types/response.type'
import { HttpUtil } from '@/utils/http.util'

const endpoint = 'categories'
const CategoryApi = {
  getCategories: () => {
    return HttpUtil.get<SuccessResponse<Category[]>>(endpoint)
  }
}

export default CategoryApi
