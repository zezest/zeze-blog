import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { withPrefix } from 'gatsby'
import hex2rgba from 'hex2rgba'

import { media } from 'src/theme'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    color: ${props => props.theme.text};
    font-family: 'Spoqa Han Sans', 'Sans-serif';
    font-weight: 400;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    /* background: url(${withPrefix('/images/pattern.svg')}) repeat; */
    background-color: ${props => props.theme.main.bg};
    transition: background-color 500ms ease;
  }

  h1, h2, h3, b, strong {
    color: ${props => hex2rgba(props.theme.text, 0.95)};
    font-weight: 700;
    transition: color 500ms ease;
  }

  h1 {
    font-size: 1.925rem;
  }

  h2 {
    font-size: 1.625rem;
  }

  h3 {
    font-size: 1.375rem;
  }

  h4 {
    font-size: 1.125rem;
  }
  
  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.975rem;
  }

  p,
  li {
    color: ${props => hex2rgba(props.theme.text, 0.85)};
    word-break: break-word;
    transition: color 500ms ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  i, 
  em {
    font-style: italic;
  }

  tt,
  code {
    padding: 0;
  }
  
  ${media.lessThan('xsmall')} {
    html {
      font-size: 100%;
    }
  }
`

export const Main = styled.main`
  display: flex;
  margin: 0 auto;
  padding: 0 20px 5rem;
  align-items: center;
 
  ${media.greaterThan('medium')} {
    width: 90%;
  }

  ${media.greaterThan('large')} {
    max-width: 1000px;
  }
`