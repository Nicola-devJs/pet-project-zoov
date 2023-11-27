import { styled } from 'styled-components'
import { StyledTitle } from '../../styled/title/StyledTitle'
import { StyledText } from '../../styled/text/StyledText'
import { StyledFlex } from '../../styled/flex/StyledFlex'

export const StyledModalContentRation = styled.div``

export const ContentHeader = styled(StyledFlex)`
   flex-wrap: wrap;
   margin-bottom: 27px;
   gap: 24px;
   justify-content: space-between;
   align-items: center;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      flex-direction: column;
      gap: 16px;
   }`}
`

export const ContentTitle = styled(StyledTitle)`
   color: ${(props) => props.theme.colors.red};
   font-size: 40px;

   letter-spacing: 0.8px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      order: 1;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      font-size: 32px;
   }`}
`

export const ContentSocials = styled(StyledFlex)`
   gap: 30px;
   align-self: flex-end;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      width: 100%;
      order: 3;
      gap: 20px;
      & a {
         width: 100%;
         justify-content: center;
         height: 48px;
      }
   }`}

   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      flex-direction: column;
      gap: 10px;
   }`}
`

export const ContentText = styled(StyledText)`
   flex: 1 0 100%;
   color: ${(props) => props.theme.colors.black};
   font-size: 15px;

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      order: 2;
   }`}
`

export const ContentFormWrapper = styled(StyledFlex)`
   gap: 32px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      flex-direction: column;
      gap: 16px;
   }`}
`

export const ContentFromColumn = styled(StyledFlex)`
   flex: 0 0 50%;
   & .textarea {
      flex: 1 1 auto;
   }

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      & .textarea {
         flex: 1 1 97px;
      }
   }`}
`
export const ContentFromColumnContainer = styled(StyledFlex)`
   width: 100%;
   gap: 16px;
   & > label {
      flex: 0 1 50%;
   }
`
export const ContentFromColumnContainerRadio = styled(
   ContentFromColumnContainer
)`
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      flex-direction: row-reverse;
   }`}

   ${(props) => `@media(max-width: ${props.theme.media.phone}) {

      & > label {
         flex: 1 1 auto;
         
      }
   }`}
`

export const ContentFormFooter = styled(StyledFlex)`
   margin-top: 42px;

   & label[for='ration_checkbox'] {
      align-items: center;
      span {
         text-wrap: nowrap;
      }
   }

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      margin-top: 24px;
      & label[for='ration_checkbox'] {
         align-items: flex-start;
         span {
            text-wrap: wrap;
         }
      }
   }`}
   @media(max-width: 550px) {
      flex-direction: column;
      align-items: flex-start;

      & label[for='ration_checkbox'] {
         margin-bottom: 24px;
         width: 100%;
      }

      & button {
         width: 100%;
      }
   }
`
