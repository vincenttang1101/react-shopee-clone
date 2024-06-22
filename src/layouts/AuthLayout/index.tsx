import { Outlet } from 'react-router-dom'

import { AuthHeader, Footer } from '@/components/common'

export default function AuthLayout() {
  return (
    <div>
      <AuthHeader />
      <Outlet />
      <Footer />
    </div>
  )
}
