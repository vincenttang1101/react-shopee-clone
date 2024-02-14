interface IMainLayout {
  children: React.ReactNode
}

export default function MainLayout({ children }: IMainLayout) {
  return <div>{children}</div>
}
