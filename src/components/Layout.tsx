import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import SiteRoot from './SiteRoot'
import MainContent from './MainContent'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const Layout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <SiteRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: 'description', content: data.site.siteMetadata.description }]}
        />
        <Header title={data.site.siteMetadata.title} />
        <MainContent>{children}</MainContent>
      </SiteRoot>
    )}
  />
)

export default Layout
