import { css, styled } from 'styled-components'
import close from './assets/close.svg'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'

export const StyledModal = styled.div<{ open: boolean }>`
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   z-index: 100;
   visibility: visible;
   transition: visibility 0.1s linear;
   overflow-y: auto;
   ${(props) =>
      !props.open &&
      css`
         visibility: hidden;
         transition: visibility 0.1s linear 0.3s;
      `}
`

export const ModalOverlay = styled.div<{ open: boolean }>`
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   transition: opacity 0.2s ease;
   opacity: 1;
   background-color: rgba(0, 0, 0, 0.4);
   ${(props) => !props.open && `opacity: 0;`}
`

export const ModalWrapper = styled(StyledFlex)`
   width: 100%;
   height: 100%;
   padding: 24px;

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      min-height: 100%;
      overflow-y: auto;
   }`}
`

export const ModalBody = styled(StyledFlex)<{
   open: boolean
   width: number | 'default' | 'small'
}>`
   position: relative;
   flex: 0 1
      ${(props) =>
         props.width === 'default'
            ? 872
            : props.width === 'small'
            ? 461
            : props.width}px;
   min-height: 232px;
   background: #fff;
   color: #000;
   padding: 56px;
   transform: scale(1);
   transition: transform 0.2s linear;
   ${(props) => !props.open && `transform: scale(0);`}

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      padding: 48px 40px 40px 40px;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      padding: 48px 25px 25px 25px;
   }`}
`

export const Close = styled.span`
   position: absolute;
   top: 16px;
   right: 16px;
   background: url(${close}) no-repeat;
   width: 32px;
   height: 32px;
   display: block;
   cursor: pointer;
`
