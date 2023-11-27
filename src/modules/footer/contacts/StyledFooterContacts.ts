import { styled } from 'styled-components'
import { StyledText } from '../../../components/styled/text/StyledText'
import { StyledTitle } from '../../../components/styled/title/StyledTitle'

export const StyledFooterContacts = styled.div`
   flex: 0 1 300px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      width: 100%;
      flex: 1 1 auto;
   }`}
`

export const FooterContactsTitle = styled(StyledTitle)`
   color: ${(props) => props.theme.colors.white};
   font-size: 40px;
   letter-spacing: 0.8px;
   margin-bottom: 8px;
`
export const FooterContactsText = styled(StyledText)`
   color: ${(props) => props.theme.colors.white};
   line-height: 140%;
   margin-bottom: 32px;
`
export const FooterContactsTel = styled(StyledText)`
   color: ${(props) => props.theme.colors.white};
   text-decoration: none;
   line-height: 140%;
   font-weight: 700;
   margin-bottom: 24px;
   display: inline-block;

   &:hover {
      text-decoration: underline;
   }
`

export const FooterContactsSocials = styled.div`
   width: 223px;
   margin-bottom: 40px;
   & a {
      width: 100%;
      &:not(:last-child) {
         margin-bottom: 16px;
      }
   }
`

export const FooterContactsSubscribe = styled(StyledText)`
   color: ${(props) => props.theme.colors.white};
   line-height: 140%;

   & a {
      color: ${(props) => props.theme.colors.white};
      &:hover {
         text-decoration: none;
      }
   }
`
