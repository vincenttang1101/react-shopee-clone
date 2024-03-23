import { useQuery } from '@tanstack/react-query'
import useQueryParams from '@/hooks/useQueryParams'
import { productApi } from '@/apis'
import { AsideFilter, ProductItem, ProductSorter } from '@/components/pages/product'

export default function Home() {
  const queryParams = useQueryParams()
  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return productApi.getProducts(queryParams)
    }
  })
  console.log()
  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-3 w-2/3'>
            <AsideFilter />
          </div>
          <div className='col-span-9 -ml-20'>
            <div>
              <ProductSorter />
            </div>
            <ul className='mt-12 grid grid-cols-5 gap-3'>
              {data?.data.data.products.map((product) => <ProductItem key={product._id} product={product} />)}
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
