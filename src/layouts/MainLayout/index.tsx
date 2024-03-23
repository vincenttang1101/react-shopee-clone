import { MainHeader, Footer } from '@/components/common'

interface IMainLayout {
  children: React.ReactNode
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <>
      <MainHeader />
      <main className='bg-gray-200 py-9'>{children}</main>
      <Footer />
    </>
  )
}
