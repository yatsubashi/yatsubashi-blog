import * as React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../styles/variables'

const StyledWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  @media screen and (max-width: ${breakpoints.mobile}px) {
    padding: 0 1rem;
  }
`

const Wrapper: React.FC = ({ children }) => <StyledWrapper>{children}</StyledWrapper>

export default Wrapper
