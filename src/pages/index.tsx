import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              title: string
              layout: string
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
          <div key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </div>
        ))}
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            layout
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
