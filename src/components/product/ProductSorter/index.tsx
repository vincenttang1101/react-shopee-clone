import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

export default function ProductSorter() {
  return (
    <div className='flex items-center justify-between rounded-md bg-gray-300 px-11 py-5 text-2xl'>
      <div className='flex items-center'>
        <span>Sắp xếp theo</span>
        <ul className='ml-4 flex gap-x-4 capitalize'>
          <li>
            <button className='min-w-[90px] rounded-md bg-primaryColor px-7 py-4 text-center text-white transition-opacity hover:opacity-90 hover:shadow-sm'>
              Phổ biến
            </button>
          </li>
          <li>
            <button className='min-w-[90px] rounded-md bg-white px-7 py-4 text-center transition-colors hover:bg-slate-50 hover:shadow-sm'>
              Mới nhất
            </button>
          </li>
          <li>
            <button className='min-w-[90px] rounded-md bg-white px-7 py-4 text-center transition-colors hover:bg-slate-50 hover:shadow-sm'>
              Bán chạy
            </button>
          </li>
          <li>
            <select className='h-full rounded-md px-4 focus:outline-none'>
              <option disabled>Giá</option>
              <option>Giá: Thấp đến Cao</option>
              <option>Giá: Cao đến Thấp</option>
            </select>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-x-8'>
        <div>
          <span className='text-primaryColor'>1</span>
          <span>/2</span>
        </div>
        <div>
          <button
            className='cursor-not-allowed rounded-md border border-solid border-gray-400 bg-gray-300 p-4 transition-colors hover:border-white/60 hover:bg-white/60 disabled:border-gray-400 disabled:bg-white disabled:opacity-30'
            disabled
          >
            <IoChevronBackOutline />
          </button>
          <button className='rounded-md border border-solid border-gray-400 bg-gray-300 p-4 transition-colors hover:border-white/60 hover:bg-white/60'>
            <IoChevronForwardOutline />
          </button>
        </div>
      </div>
    </div>
  )
}
