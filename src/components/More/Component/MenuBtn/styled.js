import styled from 'styled-components'
import hex2rgba from 'hex2rgba'

import { media } from 'src/theme'

export const MenuIcon = styled.svg`
  width: 21px;
  height: 14px;
  padding: 10px 10px 10px 0;
  box-sizing: content-box;
  fill: ${props => hex2rgba(props.theme.text, 0.85)};
  position: relative;
  bottom: 2px;

  ${media.greaterThan('small')} {
    display: none;
  }
`

export const Wrap = styled.div`
  background-color: ${props => props.theme.main.bg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  transform: ${props => props.isActive ? `translateY(0%)` : `translateY(100%)`};
  transition: transform 250ms cubic-bezier(0.770, 0.000, 0.175, 1.000);

  ${media.greaterThan('small')} {
    display: none;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const CloseIcon = styled.svg`
  width: 14px;
  height: 14px;
  padding: 16px 20px;
  box-sizing: content-box;
  fill: ${props => hex2rgba(props.theme.text, 0.85)};

  ${media.greaterThan('small')} {
    display: none;
  }
`