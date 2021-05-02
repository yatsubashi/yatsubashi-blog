import * as React from 'react'
import { graphql } from 'gatsby'

import Container from '../components/Container'
import IndexLayout from '../layouts'
import PostItem from '../components/PostItem'
import Content from '../components/Content'

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
    <Container>
      <Content>
        <h1>Index Page</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostItem key={node.fields.slug} node={node} />
        ))}
      </Content>
    </Container>
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
