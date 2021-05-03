import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

interface PostItemProps {
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

const Wrapper = styled.div`
  padding: 0 1rem 1.2rem;
  border-bottom: solid 1px ${colors.gray.light};
`

const Content = styled.div`
  color: ${colors.fontsDark};
  &:hover {
    color: ${colors.fontsDarkHighlight};
  }
`

const PostItem: React.FC<PostItemProps> = ({ node }) => (
  <Wrapper>
    <Link to={node.fields.slug}>
      <Content>
        <h3>{node.frontmatter.title}</h3>
        <time>{node.frontmatter.created_at}</time>
      </Content>
    </Link>
  </Wrapper>
)

export default PostItem
