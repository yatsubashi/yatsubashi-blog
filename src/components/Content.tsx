import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledContent = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${colors.backgroundDark};
`

interface ContentProps {
  className?: string
}

const Content: React.FC<ContentProps> = ({ children, className }) => (
  <StyledContent className={className}>{children}</StyledContent>
)

export default Content
