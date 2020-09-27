import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import PostItem from '../components/PostItem'

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              title: string
              created_at: string
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
  <IndexLayout>
    <Page>
      <Container>
        <h1>Index Page</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostItem node={node}></PostItem>
        ))}
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___created_at, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            created_at
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
