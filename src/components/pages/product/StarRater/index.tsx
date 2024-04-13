import { FaRegStar, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function StarRater() {
  return (
    <section className='flex flex-col gap-y-4'>
      <div className='capitalize'>Đánh giá</div>
      <div className='ml-2'>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <ul key={index} className='flex items-center gap-x-3'>
              <li className='text-yellow-400'>
                <Link to='#!'>
                  <FaStar />
                </Link>
              </li>

              <li className='text-yellow-400'>
                <Link to='#!'>
                  <FaRegStar />
                </Link>
              </li>
              <li className='text-yellow-400'>
                <Link to='#!'>
                  <FaRegStar />
                </Link>
              </li>
              <li className='text-yellow-400'>
                <Link to='#!'>
                  <FaRegStar />
                </Link>
              </li>
              <li className='text-yellow-400'>
                <Link to='#!'>
                  <FaRegStar />
                </Link>
              </li>
              <li>
                <Link to='#!'>trở lên</Link>
              </li>
            </ul>
          ))}
      </div>
    </section>
  )
}
