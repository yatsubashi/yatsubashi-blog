import * as React from 'react'
import { Link } from 'gatsby'

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

const PostItem: React.FC<PostItemProps> = ({ node }) => (
  <div key={node.id}>
    <Link to={node.fields.slug}>
      <div>
        <h3>{node.frontmatter.title}</h3>
        <time>{node.frontmatter.created_at}</time>
      </div>
    </Link>
  </div>
)

export default PostItem
