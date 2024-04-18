import { useQuery } from '@tanstack/react-query'

import { CategoryApi, ProductApi } from '@/apis'
import PaginationMui from '@/components/common/Pagination'
import { AsideFilter, ProductItem, ProductSorter } from '@/components/pages/home'
import useQueryConfig from '@/hooks/useQueryConfig'
import { ProductsConfig } from '@/types/product.type'

export default function Home() {
  const queryConfig = useQueryConfig()

  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return ProductApi.getProducts(queryConfig as ProductsConfig)
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
            <AsideFilter queryConfig={queryConfig} categories={categoriesData?.data?.data || []} />
          </div>
          <div className='col-span-9 -ml-20'>
            {productsData && (
              <>
                <ProductSorter queryConfig={queryConfig} pagination={productsData.data.data.pagination} />
                <ul className='mt-12 grid grid-cols-4 gap-3'>
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
