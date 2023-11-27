import { styled } from 'styled-components'
import dog1 from '../../assets/1.jpg'
import dog2 from '../../assets/2.jpg'
import decor_dog from '../../assets/decor-dog.png'
import decor_heart from '../../assets/decor-heart.png'

export const StyledAboutPictures = styled.div`
   flex: 0 0 ${(555 / 1200) * 100}%;
   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      
      width: ${(555 / 1024) * 100}%;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
     
      width: ${(768 / 1024) * 100}%;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      width: 100%;
   }`}
`

export const AboutPictureDog1 = styled.div`
   position: relative;
   max-width: 475px;
   height: 0px;
   padding-bottom: ${(562 / 555) * 100}%;
   background: ${(props) => props.theme.colors.lightGray} url(${dog1}) no-repeat;
   background-size: cover;
   margin-right: ${(80 / 555) * 100}%;
   &:after {
      content: '';
      background: url(${decor_dog}) no-repeat;
      background-size: cover;
      background-position: center;
      position: absolute;
      z-index: 2;
      left: -${(55 / 475) * 100}%;
      bottom: -${(87 / 475) * 100}%;
      width: ${(183 / 475) * 100}%;
      height: ${(183 / 475) * 100}%;
   }
`
export const AboutPictureDog2 = styled.div`
   position: relative;
   max-width: 362px;
   height: 0px;
   padding-bottom: ${(389 / 555) * 100}%;
   background: ${(props) => props.theme.colors.lightGray} url(${dog2}) no-repeat;
   background-size: cover;
   margin: -${(206 / 555) * 100}% 0% 0% ${(194 / 555) * 100}%;
   &:after {
      content: '';
      background: url(${decor_heart}) no-repeat;
      background-size: cover;
      position: absolute;
      z-index: 2;
      right: ${(21 / 362) * 100}%;
      top: -${(50 / 362) * 100}%;
      width: ${(120 / 362) * 100}%;
      height: ${(120 / 362) * 100}%;
   }
`
