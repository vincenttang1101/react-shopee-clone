import { useQuery } from '@tanstack/react-query'
import useQueryParams from '@/hooks/useQueryParams'
import { ProductApi } from '@/apis'
import { AsideFilter, ProductItem, ProductSorter } from '@/components/pages/product'
import PaginationMui from '@/components/common/Pagination'

export default function Home() {
  const queryParams = useQueryParams()
  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return ProductApi.getProducts(queryParams)
    }
  })

  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-3 w-2/3'>
            <AsideFilter />
          </div>
          <div className='col-span-9 -ml-20'>
            <div>
              <ProductSorter queryParams={queryParams} />
            </div>
            <ul className='mt-12 grid grid-cols-5 gap-3'>
              {data?.data.data.products.map((product) => (
                <li key={product._id}>
                  <ProductItem key={product._id} product={product} />
                </li>
              ))}
            </ul>
            <div className='mt-4 flex justify-center'>
              {data?.data.data.pagination && <PaginationMui pageSize={data.data.data.pagination.page_size} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
