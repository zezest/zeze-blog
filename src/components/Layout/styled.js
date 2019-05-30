import styled, { createGlobalStyle } from 'styled-components'
import hex2rgba from 'hex2rgba'

import { media } from 'utils/theme'

const GlobalStyle = createGlobalStyle`
  html {
    color: ${props => props.theme.text};
    font-family: 'NanumSquare', 'Sans-serif';
    font-weight: 400;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-color: ${props => props.theme.main.bg};
    transition: background-color 66ms ease;
  }

  h1, h2, h3, h4, b, strong {
    color: ${props => props.theme.text};
    font-weight: 700;
  }

  p,
  li {
    color: ${props => hex2rgba(props.theme.text, 0.9)};
    word-break: break-word;
  }

  ${media.lessThan('xsmall')} {
    html {
      font-size: 100%;
    }
  }
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Main = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
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

export const NotFoundMain = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  height: calc(100vh - 200px);
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;

  ${media.lessThan('mobile')} {
    height: calc(100vh - 160px);
  }
 
  ${media.greaterThan('medium')} {
    width: 90%;
  }

  ${media.greaterThan('large')} {
    max-width: 1000px;
  }
`