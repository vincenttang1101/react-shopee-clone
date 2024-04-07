import { useQuery } from '@tanstack/react-query'
import useQueryParams from '@/hooks/useQueryParams'
import { CategoryApi, ProductApi } from '@/apis'
import { AsideFilter, ProductItem, ProductSorter } from '@/components/pages/product'
import PaginationMui from '@/components/common/Pagination'

export default function Home() {
  const queryParams = useQueryParams()

  const { data: productsData } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return ProductApi.getProducts(queryParams)
    }
  })
  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return CategoryApi.getCategories()
    }
  })

  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-3 w-2/3'>
            <AsideFilter queryParams={queryParams} categories={categoriesData?.data?.data || []} />
          </div>
          <div className='col-span-9 -ml-20'>
            {productsData && (
              <>
                <ProductSorter queryParams={queryParams} pagination={productsData.data.data.pagination} />
                <ul className='mt-12 grid grid-cols-5 gap-3'>
                  {productsData.data.data.products.map((product) => (
                    <li key={product._id}>
                      <ProductItem key={product._id} product={product} />
                    </li>
                  ))}
                </ul>
                <div className='mt-4 flex justify-center'>
                  {productsData.data.data.pagination && (
                    <PaginationMui
                      limit={productsData.data.data.pagination.limit}
                      pageSize={productsData.data.data.pagination.page_size}
                    />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
