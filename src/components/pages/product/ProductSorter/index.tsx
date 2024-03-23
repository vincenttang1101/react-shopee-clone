import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

export default function ProductSorter() {
  return (
    <div className='flex items-center justify-between rounded-sm bg-gray-300 px-6 py-2'>
      <div className='flex items-center gap-x-3'>
        <span>Sắp xếp theo</span>
        <ul className='flex gap-x-4 capitalize'>
          <li>
            <button className='min-w-[90px] rounded-sm bg-primaryColor px-5 py-2 text-center text-white transition-opacity hover:opacity-90 hover:shadow-sm'>
              Phổ biến
            </button>
          </li>
          <li>
            <button className='min-w-[90px] rounded-sm bg-white px-5 py-2 text-center transition-colors hover:bg-slate-50 hover:shadow-sm'>
              Mới nhất
            </button>
          </li>
          <li>
            <button className='min-w-[90px] rounded-sm bg-white px-5 py-2 text-center transition-colors hover:bg-slate-50 hover:shadow-sm'>
              Bán chạy
            </button>
          </li>
          <li>
            <select className='h-full rounded-sm px-4 focus:outline-none'>
              <option disabled>Giá</option>
              <option>Giá: Thấp đến Cao</option>
              <option>Giá: Cao đến Thấp</option>
            </select>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-x-6'>
        <div>
          <span className='text-primaryColor'>1</span>
          <span>/2</span>
        </div>
        <div>
          <button
            className='cursor-not-allowed rounded-sm border border-solid border-gray-400 bg-gray-300 p-3 transition-colors hover:border-white/60 hover:bg-white/60 disabled:border-gray-400 disabled:bg-white disabled:opacity-30'
            disabled
          >
            <IoChevronBackOutline />
          </button>
          <button className='b3-gray-300 rounded-sm border border-solid border-gray-400 p-3 transition-colors hover:border-white/60 hover:bg-white/60'>
            <IoChevronForwardOutline />
          </button>
        </div>
      </div>
    </div>
  )
}
