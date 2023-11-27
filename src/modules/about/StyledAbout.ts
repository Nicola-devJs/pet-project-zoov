import { styled } from 'styled-components'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'

export const StyledAbout = styled.div`
   padding: 90px 0px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      padding: 60px 0px;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      padding: 40px 0px;
   }`}
`
export const AboutWrapper = styled.div`
   background: ${(props) => props.theme.colors.lightPink};
   padding: 80px 0px;

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      padding: 60px 0px;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      padding: 40px 0px;
   }`}
`
export const AboutBody = styled(StyledFlex)`
   gap: 80px;
   align-items: center;
   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      flex-direction: column-reverse;
   }`}
`
