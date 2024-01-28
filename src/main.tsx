import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '@src/App'
import { Layout } from '@components'
import { Login, ProductList, Register } from '@features'
import '@assets/styles/reset.css'
import '@assets/styles/common.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Layout>
            <ProductList />
          </Layout>
        )
      },
      {
        path: '/register',
        element: (
          <Layout type='register'>
            <Register />
          </Layout>
        )
      },
      {
        path: '/login',
        element: (
          <Layout type='login'>
            <Login />
          </Layout>
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
