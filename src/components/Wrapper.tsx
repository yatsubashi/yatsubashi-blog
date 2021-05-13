import * as React from 'react'
import styled from '@emotion/styled'

const StyledWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
`

const Wrapper: React.FC = ({ children }) => <StyledWrapper>{children}</StyledWrapper>

export default Wrapper
