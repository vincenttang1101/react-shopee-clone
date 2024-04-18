import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import PathConstant from '@/constants/path.constant'
import { RouteConstant } from '@/constants/route.constant'
import { AppContext } from '@/contexts'

export default function useRouteElements() {
  const { isAuthenticated } = useContext(AppContext)

  const ProtectedRoute = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to={PathConstant.login} />
  }

  const RejectedRoute = () => {
    return !isAuthenticated ? <Outlet /> : <Navigate to={PathConstant.home} />
  }

  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [RouteConstant.register, RouteConstant.login]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [RouteConstant.profile]
    },
    RouteConstant.productList,
    RouteConstant.productDetails
  ])

  return routeElements
}
