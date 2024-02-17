import { Footer, MainHeader } from '@/components'

interface IMainLayout {
  children: React.ReactNode
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <main>
      <MainHeader />
      {children}
      <Footer />
    </main>
  )
}
