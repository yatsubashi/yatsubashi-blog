import { css } from '@emotion/react'

const codeBlock = require('prismjs/themes/prism-okaidia.css')

const codeBlockOverride = css`
  code[class*='language-'],
  pre[class*='language-'] {
    letter-spacing: normal;
  }
`

/**
 * @see: https://github.com/otanu/gatsby-remark-prismjs-title about plugin
 * @see: https://github.com/PrismJS/prism/blob/master/themes/prism-okaidia.css about styles
 */
const codeTitle = css`
  .gatsby-code-title {
    display: block;
    position: relative;
    background: #272822;
    width: 100%;
    top: 10px;
  }
  .gatsby-code-title span {
    display: inline-block;
    position: relative;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    color: #ffffff;
    background: #52524e;
    padding: 2px 5px;
  }
`

const content = css`
  h2,
  h3,
  h4,
  h5 {
    margin: 1.2rem 0 0.5rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  a:hover {
    text-decoration: underline;
  }
`

export default css([codeBlock, codeBlockOverride, codeTitle, content])
