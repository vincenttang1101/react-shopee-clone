import PathConstant from '@/constants/path.constant'
import { AuthLayout, MainLayout } from '@/layouts'
import { Home, Login, ProductDetails, Profile, Register } from '@/pages'

type RouteKey = 'register' | 'login' | 'profile' | 'productList' | 'productDetails'

type IRoute = {
  [key in RouteKey]: {
    path: string
    element: React.ReactElement
    index?: boolean
  }
}

const RouteConstant: IRoute = {
  register: {
    path: PathConstant.register,
    element: (
      <AuthLayout>
        <Register />
      </AuthLayout>
    )
  },
  login: {
    path: PathConstant.login,
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    )
  },
  profile: {
    path: PathConstant.profile,
    element: (
      <MainLayout>
        <Profile />
      </MainLayout>
    )
  },
  productList: {
    path: PathConstant.home,
    index: true,
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    )
  },
  productDetails: {
    path: PathConstant.productDetails,
    index: true,
    element: (
      <MainLayout>
        <ProductDetails />
      </MainLayout>
    )
  }
}

export { RouteConstant }
