import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import styled from '@emotion/styled'
import postContentStyle from '../styles/postContentStyle'
import SEO from '../components/SEO'

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
    }
  }
`

interface PageTemplateProps {
  site: {
    siteMetadata: {
      title: string
    }
  }
  markdownRemark: {
    html: string
    frontmatter: {
      title: string
      description: string
      date: string
    }
  }
}

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

const PageTemplate: React.FC<PageProps<PageTemplateProps>> = ({ data }) => {
  const { site, markdownRemark } = data

  return (
    <Layout title={site.siteMetadata.title}>
      <SEO
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
      />
      <div>
        <PostCreatedDate>{markdownRemark.frontmatter.date}</PostCreatedDate>
        <PostTitle>{markdownRemark.frontmatter.title}</PostTitle>
        {/* eslint-disable-next-line react/no-danger */}
        <PostContent dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </div>
    </Layout>
  )
}

export default PageTemplate
