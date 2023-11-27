import { styled } from 'styled-components'
import { StyledFlex } from '../../styled/flex/StyledFlex'
import { StyledText } from '../../styled/text/StyledText'

export const StyledRationsModalContent = styled.div`
   width: 100%;
   & > div:not(:last-child) {
      margin-bottom: 18px;
   }
`

export const ContentWrapper = styled(StyledFlex)`
   gap: 45px;
   width: 100%;
   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      gap: 30px;
   }`}

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      flex-direction: column;
   }`}
`

export const ContentImg = styled.div`
   flex: 0 1 50%;
   height: 421px;

   background: ${(props) => props.theme.colors.white};
   img {
      width: 100%;
      height: inherit;
      object-fit: cover;
      vertical-align: bottom;
   }
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      img {
         object-fit: contain;
      }
   }`}
`
// padding-bottom: ${(421 / 760) * 100}%;

export const ContentVariants = styled(StyledFlex)`
   flex: 0 1 50%;
   gap: 16px;
`

export const ContentBody = styled(StyledFlex)`
   flex: 0 1 50%;

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      width: 100%;
      button {
         width: 100%;
      }
   }`}
`

export const ContentTitle = styled(StyledText)`
   color: ${(props) => props.theme.colors.black};
   font-size: 20px;
   font-weight: 700;
   margin-bottom: 4px;
`

export const ContentSubTitle = styled(StyledText)`
   color: ${(props) => props.theme.colors.lightGray};
   font-size: 15px;
   margin-bottom: 16px;
`
export const ContentText = styled(StyledText)`
   line-height: 140%;
   font-size: 14px;
   span {
      font-weight: 600;
   }
`

export const ContentDescription = styled(ContentText)`
   margin-top: 45px;
   flex: 1 1 auto;
`

export const ContentGrams = styled(ContentSubTitle)`
   font-size: 13px;
   margin: 19px 0px 0px 0px;
`
export const ContentOtherRation = styled.div<{ img: string }>`
   width: 64px;
   height: 64px;
   background: #f5f5f5 url(${(props) => props.img}) no-repeat;
   background-size: cover;
   background-position: center;
   cursor: pointer;
`
