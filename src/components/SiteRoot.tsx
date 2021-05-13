import { Global } from '@emotion/react'
import * as React from 'react'
import globalStyle from '../styles/globalStyle'

const SiteRoot: React.FC = ({ children }) => (
  <div>
    <Global styles={globalStyle} />
    {children}
  </div>
)

export default SiteRoot
