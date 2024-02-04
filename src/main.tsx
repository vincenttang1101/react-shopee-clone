import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '@src/App'
import { Layout } from '@components'
import { Auth, ProductList } from '@features'
import '@assets/styles/reset.css'
import '@assets/styles/common.css'

enum EAuthHeader {
  register = 'register',
  login = 'login'
}

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
          <Layout type={EAuthHeader.register}>
            <Auth type={EAuthHeader.register} />
          </Layout>
        )
      },
      {
        path: '/login',
        element: (
          <Layout type={EAuthHeader.login}>
            <Auth type={EAuthHeader.login} />
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
