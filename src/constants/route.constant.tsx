import { AuthLayout, MainLayout } from '@/layouts'
import { Login, Home, Profile, Register } from '@/pages'

type RouteKey = 'REGISTER' | 'LOGIN' | 'PROFILE' | 'PRODUCT_LIST'

type IRoute = {
  [key in RouteKey]: {
    path: string
    element: React.ReactElement
    index?: boolean
  }
}

export const ROUTES: IRoute = {
  REGISTER: {
    path: '/register',
    element: (
      <AuthLayout>
        <Register />
      </AuthLayout>
    )
  },
  LOGIN: {
    path: '/login',
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    )
  },
  PROFILE: {
    path: '/profile',
    element: (
      <MainLayout>
        <Profile />
      </MainLayout>
    )
  },
  PRODUCT_LIST: {
    path: '/',
    index: true,
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    )
  }
}
