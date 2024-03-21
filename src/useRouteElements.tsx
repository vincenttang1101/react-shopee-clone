import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { ROUTES } from '@/constants/route.constant'
import { PATHS } from '@/constants/path.constant'
import { AppContext } from '@/contexts'

export default function useRouteElements() {
  const { isAuthenticated } = useContext(AppContext)

  const ProtectedRoute = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to={PATHS.LOGIN} />
  }

  const RejectedRoute = () => {
    return !isAuthenticated ? <Outlet /> : <Navigate to={PATHS.HOME} />
  }

  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [ROUTES.REGISTER, ROUTES.LOGIN]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [ROUTES.PROFILE]
    },
    ROUTES.PRODUCT_LIST
  ])

  return routeElements
}
