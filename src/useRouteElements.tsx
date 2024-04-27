import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import PathConstant from '@/constants/path.constant'
import { AppContext } from '@/contexts'
import { AuthLayout, MainLayout } from '@/layouts'
import { Cart, Home, Login, ProductDetails, Profile, Register } from '@/pages'

export default function useRouteElements() {
  const { isAuthenticated } = useContext(AppContext)

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated ? children : <Navigate to={PathConstant.login} />
  }

  const RejectedRoute = ({ children }: { children: React.ReactNode }) => {
    return !isAuthenticated ? children : <Navigate to={PathConstant.home} />
  }

  const routeElements = useRoutes([
    {
      path: '',
      element: (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/:nameId',
          element: <ProductDetails />
        },
        {
          path: '/profile',
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          )
        },
        {
          path: '/cart',
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          )
        }
      ]
    },
    {
      path: '',
      element: (
        <AuthLayout>
          <RejectedRoute>
            <Outlet />
          </RejectedRoute>
        </AuthLayout>
      ),
      children: [
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/login',
          element: <Login />
        }
      ]
    }
  ])
  return routeElements
}
