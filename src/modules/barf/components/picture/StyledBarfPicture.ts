import { styled } from 'styled-components'
import picture from '../../assets/picture.jpg'
export const StyledBarfPicture = styled.div`
   flex: 0 1 588px;
   height: 0;
   padding-bottom: ${(533 / 1200) * 100}%;
   object-fit: cover;
   background: ${(props) => props.theme.colors.lightGray} url(${picture})
      no-repeat;
   background-size: cover;
   background-position: center;

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      flex: 1 1 auto;
      padding-bottom: 335px;
      width: 100%;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      padding-bottom: ${(335 / 375) * 100}%;
   }`}
`
