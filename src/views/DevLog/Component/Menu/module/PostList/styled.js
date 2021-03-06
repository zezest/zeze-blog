import styled, { css } from 'styled-components'
import hex2rgba from 'hex2rgba'

export const Item = styled.li`
  border-left: 4px solid transparent;
  padding-left: 16px;
  line-height: 20px;

  & + li {
    margin-top: 10px;
  }

  > p {
    color: ${props => props.theme.text};
    font-weight: 700;
    cursor: default;
  }

  > a {
    color: ${props => hex2rgba(props.theme.text, 0.6)};

    &:hover {
      color: ${props => hex2rgba(props.theme.text, 0.8)};
    }
  }

  ${props => props.isActive && css`
    border-color: ${props => props.theme.textHighlight};
  `}
`