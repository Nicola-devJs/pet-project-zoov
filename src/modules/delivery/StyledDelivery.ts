import { styled } from 'styled-components'
import { StyledTitle } from '../../components/styled/title/StyledTitle'

export const StyledDelivery = styled.div`
   padding: 90px 0px;

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      padding: 60px 0px;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      padding: 40px 0px 20px;
   }`}
`

export const DeliveryTitle = styled(StyledTitle)`
   margin-bottom: 57px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      margin-bottom: 30px;
   }`}

   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      margin-bottom: 20px;
   }`}
`
