import { styled } from 'styled-components'
import imgPreview from './assets/preview.jpg'
import imgLabel from './assets/label-preview.png'

export const StyledPreview = styled.div`
   width: 100%;
   min-height: 100vh;
   background: url('${imgPreview}') no-repeat;
   background-size: cover;
   background-position: center;
   position: relative;
`

export const PreviewLabel = styled.div`
   position: absolute;
   bottom: 92px;
   right: 0;
   width: 147px;
   height: 548px;
   background: url('${imgLabel}') no-repeat;
   background-size: contain;

   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      width: 115px;
      height: 430px;
      bottom: 20px
   }`}

   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      width: 90px;
      height: 334px;
      bottom: 10px
   }`}
`
