import { AsideFilter, ProductItem } from '@/components'

export default function Home() {
  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-3'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <span>Sắp xếp theo</span>
            <div className='grid grid-cols-5'>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
