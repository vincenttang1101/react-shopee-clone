import useRouteElements from '@/useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@/App.css'

function App() {
  const routeElements = useRouteElements()

  return (
    <>
      {routeElements}
      <ToastContainer />
    </>
  )
}

export default App
