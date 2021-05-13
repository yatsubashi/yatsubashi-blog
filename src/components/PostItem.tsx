import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

interface PostItemProps {
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

const PostItemWrapper = styled.div`
  border-bottom: solid 1px ${colors.gray.light};
`

const PostItemLink = styled(Link)`
  display: block;
  padding: 1rem;
  color: ${colors.fontsDark};
  &:hover {
    color: ${colors.fontsDarkHighlight};
  }
`

const PostItemContent = styled.div`
  h3 {
    font-size: 1.5rem;
  }
  time {
    display: block;
    font-size: 1rem;
  }
`

const PostItem: React.FC<PostItemProps> = ({ node }) => (
  <PostItemWrapper>
    <PostItemLink to={node.fields.slug}>
      <PostItemContent>
        <h3>{node.frontmatter.title}</h3>
        <time>{node.frontmatter.date}</time>
      </PostItemContent>
    </PostItemLink>
  </PostItemWrapper>
)

export default PostItem
