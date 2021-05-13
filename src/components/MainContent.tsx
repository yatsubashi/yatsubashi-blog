import styled from '@emotion/styled'
import * as React from 'react'
import Wrapper from './Wrapper'

const MainContainer = styled.div`
  margin: 2rem auto 4rem;
  max-width: 780px;
  height: 100%;
`

const MainContent: React.FC = ({ children }) => (
  <div>
    <Wrapper>
      <MainContainer>
        <main>{children}</main>
      </MainContainer>
    </Wrapper>
  </div>
)

export default MainContent
