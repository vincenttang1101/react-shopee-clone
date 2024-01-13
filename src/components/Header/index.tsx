interface IHeader {
  type?: string
}

export default function Header({ type }: IHeader) {
  const renderHeader = (type: string | undefined) => {
    switch (type) {
      case 'register':
      case 'login':
        return <>Sign up/in</>
      default:
        return <>Home</>
    }
  }

  return <>{renderHeader(type)}</>
}
