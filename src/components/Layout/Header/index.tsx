import { HomeHeader, AuthHeader } from '@components'

interface IHeader {
  type?: string
}

enum AuthHeaderEnum {
  register = 'register',
  login = 'login'
}

export default function Header({ type }: IHeader) {
  const renderHeader = (type: string | undefined) => {
    switch (type) {
      case AuthHeaderEnum.register:
        return <AuthHeader type={AuthHeaderEnum.register} />
      case AuthHeaderEnum.login:
        return <AuthHeader type={AuthHeaderEnum.login} />
      default:
        return <HomeHeader />
    }
  }

  return <header>{renderHeader(type)}</header>
}
