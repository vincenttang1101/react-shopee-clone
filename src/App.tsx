import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import useScrollToTop from '@/hooks/useScrollToTop'
import useRouteElements from '@/useRouteElements'

function App() {
  const routeElements = useRouteElements()
  const scrollTopper = useScrollToTop()

  scrollTopper
  return (
    <Fragment>
      {routeElements}
      <ToastContainer />
    </Fragment>
  )
}

export default App
