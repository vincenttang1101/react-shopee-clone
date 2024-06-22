import { Outlet } from 'react-router-dom'

import { Footer, MainHeader } from '@/components/common'

export default function MainLayout() {
  return (
    <>
      <MainHeader />
      <main className='bg-gray-200 py-9'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
