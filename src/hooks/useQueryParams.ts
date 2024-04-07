import { ProductsConfig } from '@/types/product.type'
import { useSearchParams } from 'react-router-dom'

export default function useQueryParams(): ProductsConfig {
  const [searchParams] = useSearchParams()

  return Object.fromEntries(searchParams) as unknown as ProductsConfig
}
