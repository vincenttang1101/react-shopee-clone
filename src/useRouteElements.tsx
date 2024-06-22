import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import PathConstant from '@/constants/path.constant'
import { AppContext } from '@/contexts'
import { AuthLayout, CartLayout, MainLayout } from '@/layouts'
import UserLayout from '@/layouts/UserLayout'
import { Cart, Home, Login, Password, ProductDetails, Profile, Register } from '@/pages'
import Purchase from '@/pages/user/purchase'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={PathConstant.login} />
}

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={PathConstant.home} />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '',
          element: <AuthLayout />,
          children: [
            {
              path: PathConstant.register,
              element: <Register />
            },
            {
              path: PathConstant.login,
              element: <Login />
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: PathConstant.home,
          index: true,
          element: <Home />
        },
        {
          path: PathConstant.productDetails,
          element: <ProductDetails />
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: PathConstant.cart,
          element: (
            <CartLayout>
              <Cart />
            </CartLayout>
          )
        },
        {
          path: PathConstant.user,
          element: <MainLayout />,
          children: [
            {
              path: '',
              element: <UserLayout />,
              children: [
                {
                  path: PathConstant.account,
                  children: [
                    {
                      path: PathConstant.profile,
                      element: <Profile />
                    },
                    {
                      path: '/user/account/password',
                      element: <Password />
                    }
                  ]
                },
                {
                  path: PathConstant.purchase,
                  element: <Purchase />
                }
              ]
            }
          ]
        }
      ]
    }
  ])
  return routeElements
}
