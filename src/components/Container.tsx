import * as React from 'react'
import styled from '@emotion/styled'

import { widths } from '../styles/variables'

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: ${widths.lg}px;
`

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container
