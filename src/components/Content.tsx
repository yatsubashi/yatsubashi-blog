import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledContent = styled.div`
  margin: 2rem 0;
  padding: 2.2rem;
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

interface ContentProps {
  className?: string
}

const Content: React.FC<ContentProps> = ({ children, className }) => (
  <StyledContent className={className}>{children}</StyledContent>
)

export default Content
