import { AsideFilter, Product } from '@/components'

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
            <div className='grid sm:grid-cols-2 md:grid-cols-5'>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
