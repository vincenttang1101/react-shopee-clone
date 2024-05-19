import { useContext } from 'react'
import { BsGlobe } from 'react-icons/bs'
import { FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'

import { AuthApi } from '@/apis'
import Popover from '@/components/common/Popover'
import PurchaseConstant from '@/constants/purchase.constant'
import { AppContext } from '@/contexts'
import { queryClient } from '@/main'

export default function NavHeader() {
  const { isAuthenticated, setIsAuthenticated, profile, setProfile } = useContext(AppContext)
  const logoutMutation = useMutation({
    mutationFn: AuthApi.logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
      queryClient.removeQueries({ queryKey: ['purchases', { status: PurchaseConstant.inCart }] })
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }
  return (
    <nav className='text-lg font-light text-white bg-primaryColor'>
      <ul className='flex items-center justify-end gap-x-6'>
        <Popover
          as='li'
          className='flex cursor-pointer items-center gap-x-2'
          renderPopover={
            <div className='flex flex-col gap-y-7 rounded-sm bg-white py-6 pl-5 pr-44 shadow-md'>
              <button className='hover:text-primaryColor'>Tiếng Việt</button>
              <button className='hover:text-primaryColor'>Tiếng Anh</button>
            </div>
          }
        >
          <BsGlobe />
          <span className='capitalize'>Tiếng Việt</span>
          <FaChevronDown />
        </Popover>

        {isAuthenticated ? (
          <Popover
            as='li'
            className='flex cursor-pointer items-center gap-x-2'
            renderPopover={
              <div className='flex flex-col rounded-sm bg-white capitalize shadow-md'>
                <Link to='#!' className='px-10 py-5 text-left hover:bg-slate-200 hover:text-primaryColor'>
                  Tài khoản của tôi
                </Link>
                <Link to='#!' className='px-10 py-5 text-left hover:bg-gray-200 hover:text-primaryColor'>
                  Đơn mua
                </Link>
                <button
                  className='border-none px-10 py-5 text-left outline-none hover:bg-gray-200 hover:text-primaryColor'
                  onClick={handleLogout}
                >
                  Đăng xuất
                </button>
              </div>
            }
          >
            <img
              className='rounded-3xl'
              src='https://down-vn.img.susercontent.com/file/e40aebfdcdb9242d433230a3c23a664e_tn'
              alt='Avatar'
            />
            <span>{profile?.email}</span>
          </Popover>
        ) : (
          <>
            <li>
              <Link to='/register' className='transition-colors hover:text-gray-300'>
                Đăng Ký
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className='border-l border-solid border-white pl-6 transition-colors hover:text-gray-300'
              >
                Đăng Nhập
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
