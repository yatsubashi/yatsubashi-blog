import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  color: ${transparentize(0.5, colors.fontsDark)};
  height: ${heights.header}px;
  background-color: ${colors.backgroundDark};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.fontsDark};
  font-size: 1.5rem;
  font-weight: 600;
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
    </HeaderInner>
  </StyledHeader>
)

export default Header
