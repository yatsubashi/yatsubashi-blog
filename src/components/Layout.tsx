import * as React from 'react'
import Header from './Header'
import SiteRoot from './SiteRoot'
import MainContent from './MainContent'

const Layout: React.FC<{ title: string }> = ({ title, children }) => (
  <SiteRoot>
    <Header title={title} />
    <MainContent>{children}</MainContent>
  </SiteRoot>
)

export default Layout
