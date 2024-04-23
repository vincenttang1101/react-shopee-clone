import { AuthHeader, Footer } from '@/components/common'

type Layout = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Layout) {
  return (
    <div>
      <AuthHeader />
      {children}
      <Footer />
    </div>
  )
}
