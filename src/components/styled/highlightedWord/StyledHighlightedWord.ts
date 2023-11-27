import { styled } from 'styled-components'

export const StyledHighlightedWord = styled.span`
   position: relative;
   &::after {
      content: '';
      width: 260px;
      height: 91px;
      position: absolute;
      left: 55%;
      top: 55%;
      transform: translate(-50%, -50%);
      z-index: -1;
      background-size: contain;
      background-repeat: no-repeat;
   }
`
