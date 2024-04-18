import { FaRegStar, FaStar } from 'react-icons/fa'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'

import { omit } from 'lodash'

import PathConstant from '@/constants/path.constant'
import { QueryConfig } from '@/hooks/useQueryConfig'

/**
 * index = 0 => 5 sao (0-4) => (5 -index) => 5 sao
 * index = 1 => 4 sao (0-3) => (5 - 1) => 4 sao
 */

export default function StarRater({ queryConfig }: { queryConfig: QueryConfig }) {
  const navigate = useNavigate()

  const handleRatingStar = (starNumber: number) => {
    navigate({
      pathname: PathConstant.home,
      search: createSearchParams(
        omit({
          ...queryConfig,
          rating_filter: starNumber.toString()
        })
      ).toString()
    })
  }

  return (
    <section className='flex flex-col gap-y-4'>
      <div className='capitalize'>Đánh giá</div>
      <div className='ml-2'>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <ul
              key={index}
              className='flex items-center gap-x-3'
              onClick={() => handleRatingStar(5 - index)}
              aria-hidden='true'
            >
              {Array(5)
                .fill(0)
                .map((_, starIndex) => {
                  if (starIndex < 5 - index) {
                    return (
                      <li key={starIndex} className='text-yellow-400'>
                        <Link to='#!'>
                          <FaStar />
                        </Link>
                      </li>
                    )
                  } else
                    return (
                      <li key={starIndex} className='text-yellow-400'>
                        <Link to='#!'>
                          <FaRegStar />
                        </Link>
                      </li>
                    )
                })}
              <span className='text-md'>trở lên</span>
            </ul>
          ))}
      </div>
    </section>
  )
}
