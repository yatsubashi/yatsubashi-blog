import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import PostItem from '../components/PostItem'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

interface IndexPageProps {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: [
      {
        node: {
          id: string
          frontmatter: {
            title: string
            date: string
          }
          fields: {
            slug: string
          }
        }
      }
    ]
  }
}

const IndexPage: React.FC<PageProps<IndexPageProps>> = ({ data }) => {
  const { site, allMarkdownRemark } = data

  return (
    <Layout title={site.siteMetadata.title}>
      <SEO />
      {allMarkdownRemark.edges.map(({ node }) => (
        <PostItem key={node.fields.slug} node={node} />
      ))}
    </Layout>
  )
}

export default IndexPage
