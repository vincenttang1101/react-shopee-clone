import { Footer, MainHeader } from '@/components'

interface IMainLayout {
  children: React.ReactNode
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <>
      <MainHeader />
      <main className='bg-gray-200 py-20'>{children}</main>
      <Footer />
    </>
  )
}
