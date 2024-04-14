import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import clsx from 'clsx'
import { omit } from 'lodash'
import { ProductConstant } from '@/constants/product.constant'
import { Products, ProductsConfig } from '@/types/product.type'
import { PathConstant } from '@/constants/path.constant'
import { QueryConfig } from '@/hooks/useQueryConfig'

type SortByValue = ProductsConfig['sort_by']
type OrderByValue = ProductsConfig['order']
type Props = {
  queryConfig: QueryConfig
  pagination: Products['pagination']
}

export default function ProductSorter({ queryConfig, pagination }: Props) {
  const navigate = useNavigate()

  const { sortBy, order: orderBy } = ProductConstant

  const { sort_by = sortBy.view, order } = queryConfig

  const isActiveSortBy = (sortByValue: ProductsConfig['sort_by']) => {
    return sort_by === sortByValue
  }

  const handleSort = (sortByValue: SortByValue) => {
    if (sortByValue) {
      navigate({
        pathname: PathConstant.home,
        search: createSearchParams(
          omit(
            {
              ...queryConfig,
              sort_by: sortByValue
            },
            ['order']
          )
        ).toString()
      })
    }
  }

  const handleSortByPrice = (orderByValue: OrderByValue) => {
    if (orderByValue) {
      navigate({
        pathname: PathConstant.home,
        search: createSearchParams({
          ...queryConfig,
          sort_by: sortBy.price,
          order: orderByValue
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
                  'bg-primaryColor text-white': isActiveSortBy(sortBy.view),
                  'bg-white text-black': !isActiveSortBy(sortBy.view)
                }
              )}
              onClick={() => handleSort(sortBy.view)}
            >
              Phổ biến
            </button>
          </li>
          <li>
            <button
              className={clsx(
                'min-w-[90px] rounded-sm px-4 py-2 text-center  transition-opacity hover:opacity-90 hover:shadow-sm',
                {
                  'bg-primaryColor text-white': isActiveSortBy(sortBy.createdAt),
                  'bg-white text-black': !isActiveSortBy(sortBy.createdAt)
                }
              )}
              onClick={() => handleSort(sortBy.createdAt)}
            >
              Mới nhất
            </button>
          </li>
          <li>
            <button
              className={clsx(
                'min-w-[90px] rounded-sm px-4 py-2 text-center  transition-opacity hover:opacity-90 hover:shadow-sm',
                {
                  'bg-primaryColor text-white': isActiveSortBy(sortBy.sold),
                  'bg-white text-black': !isActiveSortBy(sortBy.sold)
                }
              )}
              onClick={() => handleSort(sortBy.sold)}
            >
              Bán chạy
            </button>
          </li>
          <li>
            <select
              className={clsx(
                'h-full rounded-sm border-r-[16px] border-solid border-transparent px-4 focus:outline-none',
                {
                  'bg-primaryColor text-white': isActiveSortBy(sortBy.price)
                }
              )}
              value={order || ''}
              onChange={(e) => handleSortByPrice(e.target.value as OrderByValue)}
            >
              <option value='' className='bg-white text-black' disabled>
                Giá
              </option>
              <option value={orderBy.asc} className='bg-white text-black'>
                Giá: Thấp đến Cao
              </option>
              <option value={orderBy.desc} className='bg-white text-black'>
                Giá: Cao đến Thấp
              </option>
            </select>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-x-6'>
        <div>
          <span className='text-primaryColor'>{pagination?.page || 0}</span>
          <span>/</span>
          <span>{pagination.page_size || 0}</span>
        </div>
        <div className='flex'>
          <Link
            to={`?page=${pagination.page - 1}&limit=${pagination.limit}`}
            className={clsx(
              `rounded-sm border border-solid border-gray-400 bg-gray-300 p-3 transition-colors hover:border-white/60 hover:bg-white/60 disabled:border-gray-400 disabled:bg-white disabled:opacity-30`,
              { 'pointer-events-none opacity-15 ': pagination.page <= 1 }
            )}
          >
            <IoChevronBackOutline />
          </Link>
          <Link
            to={`?page=${pagination.page + 1}&limit=${pagination.limit}`}
            className={clsx(
              `rounded-sm border border-solid border-gray-400 bg-gray-300 p-3 transition-colors hover:border-white/60 hover:bg-white/60 disabled:border-gray-400 disabled:bg-white disabled:opacity-30`,
              { 'pointer-events-none opacity-15 ': pagination.page === pagination.page_size }
            )}
          >
            <IoChevronForwardOutline />
          </Link>
        </div>
      </div>
    </div>
  )
}
