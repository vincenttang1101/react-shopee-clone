import { Outlet } from 'react-router-dom'

import UserSideNav from '@/components/pages/user/UserSideNav'

export default function UserLayout() {
  return (
    <div>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-4'>
            <UserSideNav />
          </div>
          <div className='col-span-8'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
