import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors } from '../styles/variables'
import Wrapper from './Wrapper'

interface HeaderProps {
  title: string
}

const StyledHeader = styled.header`
  padding: 0.5rem 0;
  background-color: ${colors.backgroundDark};
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
`

const HomepageLink = styled(Link)`
  color: ${colors.fontsDark};
  font-size: 1.5rem;
  font-weight: 600;
`

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <Wrapper>
      <div>
        <HomepageLink to="/">{title}</HomepageLink>
      </div>
    </Wrapper>
  </StyledHeader>
)

export default Header
