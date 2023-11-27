import { styled } from 'styled-components'
import { StyledText } from '../../../../components/styled/text/StyledText'
import arrow from '../../assets/arrow.svg'
import { StyledFlex } from '../../../../components/styled/flex/StyledFlex'

export const StyledDeliveryListItem = styled.div`
   flex: 0 1 25%;
   padding: 12.5px;
   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      flex: 0 1 50%;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      flex: 1 1 100%;
      padding: 20px 0px;
   }`}
`
export const DeliveryItemImgWrapper = styled(StyledFlex)`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 16px;

   &:not(:last-child)::after {
      content: '';
      width: 140px;
      height: 16px;
      background: url(${arrow}) no-repeat;
      margin-right: 30px;
   }

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      &:not(:last-child)::after {
         display: none;
      }
   }`}
`

export const DeliveryItemImg = styled.img`
   width: 40px;
   height: 40px;
`

export const DeliveryItemTitle = styled(StyledText)`
   color: ${(props) => props.theme.colors.black};
   font-weight: 600;
   font-size: 18px;
   margin-bottom: 8px;
`

export const DeliveryItemText = styled(StyledText)`
   color: ${(props) => props.theme.colors.black};
   span {
      color: ${(props) => props.theme.colors.red};
      position: relative;
      cursor: pointer;
      text-wrap: nowrap;
      &:after {
         content: '';
         position: absolute;
         bottom: -2px;
         left: 0;
         width: 100%;
         height: 1px;
         background: ${(props) => props.theme.colors.red};
         transition: width 0.2s linear;
      }

      &:hover:after {
         width: 0%;
      }
   }
`
