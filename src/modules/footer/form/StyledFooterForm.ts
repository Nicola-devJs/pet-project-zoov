import { styled } from 'styled-components'
import { StyledText } from '../../../components/styled/text/StyledText'
import { StyledFlex } from '../../../components/styled/flex/StyledFlex'

export const StyledFooterForm = styled.div`
   flex: 0 1 636px;
   margin-right: 73px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      margin-right: 0px;
      flex: 1 1 auto;
      width: 100%;
   }`}
`
export const FooterFormLabel = styled.h4`
   color: ${(props) => props.theme.colors.white};
   font-size: 20px;
   font-weight: 600;
   line-height: 140%;
   margin-bottom: 4px;
`
export const FooterFormSubLabel = styled(StyledText)`
   color: ${(props) => props.theme.colors.white};
   line-height: 140%;
   margin-bottom: 34px;
`
export const FooterFormWrraper = styled.form``

export const FooterFormInputContainer = styled(StyledFlex)`
   width: 100%;
   gap: 24px;
   margin-bottom: 16px;
   & > div {
      flex: 0 1 50%;
   }
   @media (max-width: 550px) {
      flex-direction: column;
      gap: 16px;
   }
`

export const FooterFormBottom = styled(StyledFlex)`
   margin-top: 22px;
   & label {
      max-width: 280px;
   }
   @media (max-width: 550px) {
      flex-direction: column;
      align-items: flex-start;
      & label {
         width: 100%;
         max-width: 100%;
         margin-bottom: 33px;
      }
   }

   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      & button {
         width: 100%;
      }
   }`}
`
