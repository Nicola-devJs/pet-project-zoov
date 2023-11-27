import { styled } from 'styled-components'
import { StyledFlex } from '../../../../components/styled/flex/StyledFlex'
import arrowDown from '../../assets/arrow-down.svg'

export const StyledDeliveryList = styled(StyledFlex)`
   margin: 0px -12.5px;
   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      flex-wrap: wrap;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      margin: 0px 0px;
      position: relative;
      padding-left: 31px; 
      &:before {
         content: '';
         position: absolute;
         left: 0;
         top: 0;
         width: 16px;
         height: 100%;
         background:url(${arrowDown}) no-repeat;
         background-size: contain;
         background-position: bottom;
         
      }
   }`}
`
