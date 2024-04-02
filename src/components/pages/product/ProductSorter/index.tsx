import { createSearchParams, useNavigate } from 'react-router-dom'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import clsx from 'clsx'
import { SORT_BY } from '@/constants/product.constant'
import { ProductsConfig } from '@/types/product.type'
import { PATHS } from '@/constants/path.constant'

type ProductSorter = {
  queryParams: any
}

type ValueOfSort = Exclude<ProductsConfig['sort_by'], undefined>
export default function ProductSorter({ queryParams }: ProductSorter) {
  const navigate = useNavigate()

  const { sort_by = SORT_BY.view } = queryParams

  const isActiveSortBy = (value: ValueOfSort) => {
    return sort_by === value
  }

  const handleSort = (value: ValueOfSort) => {
    if (queryParams) {
      navigate({
        pathname: PATHS.HOME,
        search: createSearchParams({
          ...queryParams,
          sort_by: value
        }).toString()
      })
    }
  }

  return (
    <div className='flex items-center justify-between rounded-sm bg-gray-300 px-6 py-2'>
      <div className='flex items-center gap-x-3'>
        <span>Sắp xếp theo</span>
        <ul className='flex gap-x-4 text-sm capitalize'>
          <li>
            <button
              className={clsx(
                'min-w-[90px] rounded-sm px-4 py-2 text-center  transition-opacity hover:opacity-90 hover:shadow-sm',
                {
                  'bg-white text-black': !isActiveSortBy(SORT_BY.view),
                  'bg-primaryColor text-white': isActiveSortBy(SORT_BY.view)
                }
              )}
              onClick={() => handleSort(SORT_BY.view)}
            >
              Phổ biến
            </button>
          </li>
          <li>
            <button
              className={clsx(
                'min-w-[90px] rounded-sm px-4 py-2 text-center  transition-opacity hover:opacity-90 hover:shadow-sm',
                {
                  'bg-white text-black': !isActiveSortBy(SORT_BY.createdAt),
                  'bg-primaryColor text-white': isActiveSortBy(SORT_BY.createdAt)
                }
              )}
              onClick={() => handleSort(SORT_BY.createdAt)}
            >
              Mới nhất
            </button>
          </li>
          <li>
            <button
              className={clsx(
                'min-w-[90px] rounded-sm px-4 py-2 text-center  transition-opacity hover:opacity-90 hover:shadow-sm',
                {
                  'bg-white text-black': !isActiveSortBy(SORT_BY.sold),
                  'bg-primaryColor text-white': isActiveSortBy(SORT_BY.sold)
                }
              )}
              onClick={() => handleSort(SORT_BY.sold)}
            >
              Bán chạy
            </button>
          </li>
          <li>
            <select className='h-full rounded-sm border-r-[16px] border-solid border-transparent px-4 focus:outline-none'>
              <option>Giá</option>
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
