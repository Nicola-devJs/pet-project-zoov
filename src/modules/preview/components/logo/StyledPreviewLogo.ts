import { styled } from 'styled-components'

export const StyledPreviewLogo = styled.img<{ size: number }>`
   width: ${(props) => props.size}px;
   height: ${(props) => props.size}px;
   object-fit: contain;

   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      position: relative;
      z-index: 12;
      width: 60px;
      height: 60px;
   }`}
`
