import { Fragment, useContext, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { AppContext } from '@/contexts'
import useScrollToTop from '@/hooks/useScrollToTop'
import useRouteElements from '@/useRouteElements'
import { LocalStorageEventTarget } from '@/utils/auth.util'

function App() {
  const routeElements = useRouteElements()
  const scrollTopper = useScrollToTop()
  const { reset } = useContext(AppContext)

  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)

    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])

  scrollTopper

  return (
    <Fragment>
      {routeElements}
      <ToastContainer />
    </Fragment>
  )
}

export default App
