import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { withPrefix } from 'gatsby'

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'NanumSquare';
    font-weight: 700;
    src: local('NanumSquareEB'),
      url(${withPrefix('fonts/NanumSquareEB.woff2')}) format('woff2'),
      url(${withPrefix('fonts/NanumSquareEB.woff')}) format('woff'),
      url(${withPrefix('fonts/NanumSquareEB.ttf')}) format('truetype');
  }
  @font-face {
    font-family: 'NanumSquare';
    font-weight: 400;
    src: local('NanumSquareR'),
      url(${withPrefix('fonts/NanumSquareR.woff2')}) format('woff2'),
      url(${withPrefix('fonts/NanumSquareR.woff')}) format('woff'),
      url(${withPrefix('fonts/NanumSquareR.ttf')}) format('truetype');
  }

  * {
    box-sizing: border-box;
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

  input[type=search]::-ms-clear {
    display: none;
    width : 0;
    height: 0;
  }
  input[type=search]::-ms-reveal {
    display: none;
    width : 0;
    height: 0;
  }

  input[type=search]::-webkit-search-decoration,
  input[type=search]::-webkit-search-cancel-button,
  input[type=search]::-webkit-search-results-button,
  input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`

export default GlobalStyle