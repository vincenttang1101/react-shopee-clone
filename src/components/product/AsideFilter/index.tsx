import { Link } from 'react-router-dom'
import { TfiMenuAlt } from 'react-icons/tfi'
import { RxTriangleRight } from 'react-icons/rx'
import { LiaFilterSolid } from 'react-icons/lia'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { Button, InputField } from '@/components'

export default function AsideFilter() {
  return (
    <aside>
      <div className='flex flex-col gap-y-14'>
        <section className='flex flex-col gap-y-8'>
          <div className='flex items-center gap-x-4'>
            <TfiMenuAlt className='h-7 w-7' />
            <h2 className='text-3xl font-semibold capitalize'>Tất cả danh mục</h2>
          </div>
          <div className='h-[1px] bg-gray-300' />
          <ul className='ml-7 flex flex-col gap-y-5 text-2xl capitalize'>
            <li>
              <Link to='#!' className='relative flex items-center font-bold text-primaryColor'>
                <RxTriangleRight className='absolute -left-9' />
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

        <section className='flex flex-col gap-y-8'>
          <div className='flex items-center gap-x-4'>
            <LiaFilterSolid className='h-7 w-7' />
            <h2 className='text-3xl font-semibold capitalize'>Bộ lọc tìm kiếm</h2>
          </div>
          <div className='h-[1px] bg-gray-300' />
          <section className='flex flex-col gap-y-6'>
            <h3 className='capitalize'>Khoảng giá</h3>
            <div className='flex items-center justify-between gap-x-2'>
              <InputField className='h-12 placeholder:text-xl' placeholder='₫ TỪ'></InputField>
              <div className='h-[1px] w-14 bg-gray-400' />
              <InputField className='h-12 placeholder:text-xl' placeholder='₫ ĐẾN'></InputField>
            </div>
            <Button className='rounded-md bg-primaryColor py-3 text-2xl uppercase text-slate-100 hover:opacity-90'>
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
          <Button className='rounded-md bg-primaryColor py-3 text-2xl uppercase text-slate-100 hover:opacity-90'>
            Xóa tất cả
          </Button>
        </section>
      </div>
    </aside>
  )
}
