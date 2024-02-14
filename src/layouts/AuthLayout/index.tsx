// eslint-disable-next-line import/no-unresolved
import { Footer, Header } from '@/components'

interface ILayout {
  children: React.ReactNode
  type?: string
}

export default function AuthLayout({ children, type }: ILayout) {
  return (
    <div>
      <Header type={type} />
      {children}
      <Footer />
    </div>
  )
}
