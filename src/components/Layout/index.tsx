/* eslint-disable import/no-unresolved */
import { Footer, Header } from '@components'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
