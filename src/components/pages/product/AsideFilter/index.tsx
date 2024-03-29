import { Link } from 'react-router-dom'
import { TfiMenuAlt } from 'react-icons/tfi'
import { RxTriangleRight } from 'react-icons/rx'
import { LiaFilterSolid } from 'react-icons/lia'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { Button, InputField } from '@/components/common'

export default function AsideFilter() {
  return (
    <aside>
      <div className='flex flex-col gap-y-14'>
        <section className='flex flex-col gap-y-5'>
          <div className='flex items-center gap-x-3'>
            <TfiMenuAlt className='h-5 w-5' />
            <h2 className='text-lg font-semibold capitalize'>Tất cả danh mục</h2>
          </div>

          <div className='h-[1px] bg-gray-300' />

          <ul className='ml-4 flex flex-col gap-y-5 capitalize'>
            <li>
              <Link to='#!' className='relative flex items-center font-bold text-primaryColor'>
                <RxTriangleRight className='absolute -left-6' />
                <span>Thời trang nam</span>
              </Link>
            </li>
            <li>
              <Link to='#!'>
                <span>Áo khoác</span>
              </Link>
            </li>
            <li>
              <Link to='#!'>
                <span>Quần jeans</span>
              </Link>
            </li>
          </ul>
        </section>

        <section className='flex flex-col gap-y-5'>
          <div className='flex items-center gap-x-2'>
            <LiaFilterSolid className='h-6 w-6' />
            <h2 className='text-lg font-semibold capitalize'>Bộ lọc tìm kiếm</h2>
          </div>

          <div className='h-[1px] bg-gray-300' />

          <section className='flex flex-col gap-y-6'>
            <h3 className='capitalize'>Khoảng giá</h3>
            <div className='flex items-center justify-between gap-x-2'>
              <InputField
                className='h-8 border-gray-300 text-sm focus:border-gray-300 focus:shadow-none'
                placeholder='₫ TỪ'
              ></InputField>
              <div className='h-[1px] w-5 bg-gray-400' />
              <InputField
                className='h-8 text-sm focus:border-gray-300 focus:shadow-none focus:outline-none'
                placeholder='₫ ĐẾN'
              ></InputField>
            </div>
            <Button className='rounded-sm bg-primaryColor py-1 text-center uppercase text-slate-100 hover:opacity-90'>
              Áp dụng
            </Button>
          </section>

          <div className='h-[1px] bg-gray-300' />

          <section className='flex flex-col gap-y-4'>
            <div className='capitalize'>Đánh giá</div>
            <div className='ml-2'>
              <ul className='flex items-center gap-x-3'>
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

              <ul className='flex items-center gap-x-3'>
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

              <ul className='flex items-center gap-x-3'>
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

              <ul className='flex items-center gap-x-3'>
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
            </div>
          </section>

          <div className='h-[1px] bg-gray-300' />

          <Button className='rounded-sm bg-primaryColor py-1 text-center uppercase text-slate-100 hover:opacity-90'>
            Xóa tất cả
          </Button>
        </section>
      </div>
    </aside>
  )
}
