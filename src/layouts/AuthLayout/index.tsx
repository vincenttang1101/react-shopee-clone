import { Footer, AuthHeader } from '@/components'

interface ILayout {
  children: React.ReactNode
  type?: string
}

export default function AuthLayout({ children }: ILayout) {
  return (
    <div>
      <AuthHeader />
      {children}
      <Footer />
    </div>
  )
}
