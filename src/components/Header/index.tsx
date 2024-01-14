import { HomeHeader, RegisterHeader } from '@components'

interface IHeader {
  type?: string
}

export default function Header({ type }: IHeader) {
  const renderHeader = (type: string | undefined) => {
    switch (type) {
      case 'register':
      case 'login':
        return <RegisterHeader />
      default:
        return <HomeHeader />
    }
  }

  return <header>{renderHeader(type)}</header>
}
