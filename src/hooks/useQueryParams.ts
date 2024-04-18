import { useSearchParams } from 'react-router-dom'

import { ProductsConfig } from '@/types/product.type'

export default function useQueryParams(): ProductsConfig {
  const [searchParams] = useSearchParams()

  return Object.fromEntries(searchParams)
}
