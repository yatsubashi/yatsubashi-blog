import { fonts, colors, breakpoints } from './variables'
import { getEmSize } from './mixins'
import { css } from '@emotion/react'

const ress = require('ress/dist/ress.min.css')

const styles = css`
  html,
  body {
    width: 100%;
    font-size: 100%;
  }

  body {
    color: ${colors.fontsDark};
    font-family: ${fonts.yuGothic};
    line-height: 1.6;
    background-color: ${colors.backgroundDark};
  }

  b,
  strong {
    font-family: ${fonts.yuGothicBold};
  }

  a {
    color: ${colors.linkDark};
    text-decoration: none;
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  blockquote {
    border-left: 0.25rem solid ${colors.ui.light};
    color: ${colors.gray.calm};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${getEmSize(breakpoints.tablet)}em) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
`

export default css([ress, styles])
