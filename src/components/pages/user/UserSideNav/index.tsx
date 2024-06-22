import { FaPen } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'
import { IoNewspaperOutline } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'

import clsx from 'clsx'

import PathConstant from '@/constants/path.constant'

export default function UserSideNav() {
  const { pathname } = useLocation()

  return (
    <div>
      <div className='flex gap-4 items-center'>
        <img
          className='object-cover rounded-full'
          src='https://down-vn.img.susercontent.com/file/08d0c89d950906cd8c66155ece52fcb5_tn'
          alt='Avatar'
        />
        <div>
          <span className='font-bold'>tangtrinhquang</span>
          <div className='flex items-center gap-2 text-[#888]'>
            <FaPen size={15} />
            <span>Sửa hồ sơ</span>
          </div>
        </div>
      </div>
      <ul className='mt-6 flex flex-col gap-6'>
        <li className='flex gap-3 items-start'>
          <FaRegUser className='text-blue-700 text-xl' />
          <div>
            <Link to={PathConstant.profile} className='capitalize'>
              Tài khoản của tôi
            </Link>
            <ul className='mt-3 flex flex-col gap-3'>
              <li>
                <Link
                  to={PathConstant.profile}
                  className={clsx({
                    'text-primaryColor': pathname === PathConstant.profile
                  })}
                >
                  Hồ sơ
                </Link>
              </li>
              <li>
                <Link
                  to={PathConstant.password}
                  className={clsx({
                    'text-primaryColor': pathname === PathConstant.password
                  })}
                >
                  Đổi mật khẩu
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className='flex gap-3 items-center'>
          <IoNewspaperOutline className='text-blue-700 text-xl' />
          <Link
            to={PathConstant.purchase}
            className={clsx('capitalize', {
              'text-primaryColor': pathname === PathConstant.purchase
            })}
          >
            Đơn mua
          </Link>
        </li>
      </ul>
    </div>
  )
}
