import { AsideFilter, ProductItem } from '@/components'

export default function Home() {
  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-3 w-4/5'>
            <AsideFilter />
          </div>
          <div className='col-span-9'>
            <div>Sắp xếp theo</div>
            <div className='mt-12 grid grid-cols-5'>
              {Array(30)
                .fill(0)
                .map((_, index) => (
                  <div key={index}>
                    <ProductItem />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
