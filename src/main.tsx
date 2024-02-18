import React from 'react'

import { Login, ProductList, Register } from '@/pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
