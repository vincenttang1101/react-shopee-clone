import { CartHeader, Footer } from '@/components/common'

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CartHeader />
      {children}
      <Footer />
    </>
  )
}
