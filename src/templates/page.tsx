import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import styled from '@emotion/styled'
import postContentStyle from '../styles/postContentStyle'

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
      }
    }
  }
`

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

const PostContainer = styled.div`
  padding: 1rem;
`

const PostCreatedDate = styled.time`
  display: block;
`

const PostTitle = styled.h1`
  margin: 0.5rem 0 1rem;
  font-size: 2.4rem;
`

const PostContent = styled.div`
  ${postContentStyle}
`

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <Layout>
    <PostContainer>
      <PostCreatedDate>{data.markdownRemark.frontmatter.date}</PostCreatedDate>
      <PostTitle>{data.markdownRemark.frontmatter.title}</PostTitle>
      {/* eslint-disable-next-line react/no-danger */}
      <PostContent dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </PostContainer>
  </Layout>
)

export default PageTemplate
