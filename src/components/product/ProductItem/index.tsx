import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa6'

export default function ProductItem() {
  return (
    <article className='rounded-sm bg-white shadow-sm transition-transform hover:-translate-y-0.5 hover:overflow-hidden hover:shadow-md'>
      <Link to='#!'>
        <figure className='relative w-full pt-[100%]'>
          <img
            className='absolute left-0 top-0'
            src='https://down-vn.img.susercontent.com/file/vn-11134201-23030-fffuvw9nm9nv5d_tn'
            alt='Thumbnail'
          />
        </figure>
        <div className='p-3'>
          <h2 className='line-clamp-2 text-sm'>
            Áo thun nam, áo phông nam tay ngắn cổ tròn chất cotton dày dặn thoáng mát ATN010 - An Cường Fashion
          </h2>
          <div className='mt-8 flex items-center gap-x-2'>
            <div className='flex items-center gap-x-px text-gray-500 line-through'>
              <span className='text-xs'>₫</span>
              <span>78.000</span>
            </div>
            <div className='flex items-center gap-x-px text-primaryColor'>
              <span className='text-xs'>₫</span>
              <span>54.900</span>
            </div>
          </div>
          <div className='mt-3 flex items-center gap-x-2'>
            <div className='flex gap-x-px'>
              <div className='relative'>
                <div className='absolute left-0 top-0 overflow-hidden' style={{ width: '100%' }}>
                  <FaStar className='h-full w-3 text-yellow-300' />
                </div>
                <FaStar className='h-full w-3 text-gray-300' />
              </div>
              <div className='relative'>
                <div className='absolute left-0 top-0 overflow-hidden' style={{ width: '100%' }}>
                  <FaStar className='h-full w-3 text-yellow-300' />
                </div>
                <FaStar className='h-full w-3 text-gray-300' />
              </div>
              <div className='relative'>
                <div className='absolute left-0 top-0 overflow-hidden' style={{ width: '100%' }}>
                  <FaStar className='h-full w-3 text-yellow-300' />
                </div>
                <FaStar className='h-full w-3 text-gray-300' />
              </div>
              <div className='relative'>
                <div className='absolute left-0 top-0 overflow-hidden' style={{ width: '100%' }}>
                  <FaStar className='h-full w-3 text-yellow-300' />
                </div>
                <FaStar className='h-full w-3 text-gray-300' />
              </div>
              <div className='relative'>
                <div className='absolute left-0 top-0 overflow-hidden' style={{ width: '48.555%' }}>
                  <FaStar className='h-full w-3 text-yellow-300' />
                </div>
                <FaStar className='h-full w-3 text-gray-300' />
              </div>
            </div>
            <div className='text-sm'>Đã bán 22,1K</div>
          </div>
        </div>
      </Link>
    </article>
  )
}
