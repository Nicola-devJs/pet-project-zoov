import { styled } from 'styled-components'
import { StyledFlex } from '../../../../components/styled/flex/StyledFlex'

export const StyledBarfProducts = styled(StyledFlex)`
   background: ${(props) => props.theme.colors.pink};
   padding: 32px 80px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      padding: 56px 50px 24px;
   }`}
`

export const ProductsColumn = styled.div`
   flex: 0 1 50%;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      flex: 0 0 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      align-items: flex-start;
   }`}
`

export const ProductsTitle = styled.h4`
   font-size: 14px;
   color: ${(props) => props.theme.colors.black};
   font-weight: 600;
   text-transform: uppercase;
   line-height: 200%;
   margin-bottom: 16px;
`

export const ProductsList = styled(StyledFlex)`
   max-height: 180px;
   flex-wrap: wrap;

   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      max-height: 100%;
   }`}
`

export const ProductsItem = styled(StyledFlex)<{ icon: string }>`
   color: ${(props) => props.theme.colors.gray};
   font-weight: 500;
   font-size: 18px;
   line-height: 250%;
   align-items: center;

   &:before {
      content: '';
      background: url(${(props) => props.icon}) no-repeat;
      background-position: center;
      width: 20px;
      height: 21px;
      margin-right: 16px;
   }
`
