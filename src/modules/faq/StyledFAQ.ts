import { styled } from 'styled-components'
import { StyledTitle } from '../../components/styled/title/StyledTitle'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'

export const StyledFAQ = styled.div`
   padding: 90px 0px 180px;

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      padding: 60px 0px 100px;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      padding: 40px 0px 80px;
   }`}
`
export const FAQBody = styled(StyledFlex)`
   align-items: flex-start;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      flex-direction: column;
   }`}
`

export const FAQTitle = styled(StyledTitle)`
   margin-right: 76px;
   text-wrap: nowrap;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      margin: 0px 0px 40px 0px;
   }`}
`
