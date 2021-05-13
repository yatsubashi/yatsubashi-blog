import * as React from 'react'
import { graphql } from 'gatsby'

import PostItem from '../components/PostItem'
import Layout from '../components/Layout'

export const query = graphql`
  query {
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
  data: {
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
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostItem key={node.fields.slug} node={node} />
    ))}
  </Layout>
)

export default IndexPage
