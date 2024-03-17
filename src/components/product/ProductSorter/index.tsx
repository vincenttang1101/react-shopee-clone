import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

export default function ProductSorter() {
  return (
    <div className='flex items-center justify-between rounded-md bg-gray-300 px-11 py-5 text-2xl'>
      <div className='flex items-center'>
        <span>Sắp xếp theo</span>
        <ul className='ml-4 flex gap-x-4 capitalize'>
          <li>
            <button className='min-w-[90px] rounded-md bg-primaryColor px-7 py-4 text-white'>Phổ biến</button>
          </li>
          <li>
            <button className='min-w-[90px] rounded-md bg-white px-7 py-4'>Mới nhất</button>
          </li>
          <li>
            <button className='min-w-[90px] rounded-md bg-white px-7 py-4'>Bán chạy</button>
          </li>
          <li>
            <select className='h-full rounded-md px-4'>
              <option>Giá: Thấp đến Cao</option>
              <option>Giá: Cao đến Thấp</option>
            </select>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-x-8'>
        <span>
          <span className='text-primaryColor'>1</span>/3
        </span>
        <div>
          <button className='bg-gray-200 p-4 disabled:bg-gray-100 disabled:text-gray-400' disabled>
            <IoChevronBackOutline />
          </button>
          <button className='bg-white p-4'>
            <IoChevronForwardOutline />
          </button>
        </div>
      </div>
    </div>
  )
}
