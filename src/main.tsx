import React from 'react'

import { Login, ProductList, Register } from '@/pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '@/App'
import ReactDOM from 'react-dom/client'

import { AuthLayout, MainLayout } from '@/layouts'
import '@/assets/styles/reset.css'
import '@/assets/styles/global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <MainLayout>
            <ProductList />
          </MainLayout>
        )
      },
      {
        path: '/register',
        element: (
          <AuthLayout>
            <Register />
          </AuthLayout>
        )
      },
      {
        path: '/login',
        element: (
          <AuthLayout>
            <Login />
          </AuthLayout>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
