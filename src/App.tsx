import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import useScrollToTop from './hooks/useScrollToTop'

import useRouteElements from '@/useRouteElements'

function App() {
  const routeElements = useRouteElements()
  const scrollTopper = useScrollToTop()

  return (
    <>
      {routeElements}
      {scrollTopper}
      <ToastContainer />
    </>
  )
}

export default App
