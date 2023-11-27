import { styled } from 'styled-components'
import { StyledText } from '../../../../components/styled/text/StyledText'
import { StyledFlex } from '../../../../components/styled/flex/StyledFlex'
import img from '../../assets/calculate.png'
export const StyledCalculate = styled(StyledFlex)`
   background: ${(props) => props.theme.colors.pink} url(${img}) no-repeat;
   padding: 52px 121px 54px 50px;
   justify-content: space-between;
   align-items: flex-end;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      padding: 50px;
      flex-direction: column;
      align-items: center;
      text-align: center;
   }`}

   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      padding: 32px 24px;

   }`}
`
export const CalculateText = styled(StyledText)`
   color: ${(props) => props.theme.colors.black};
   font-size: 28px;
   font-weight: 500;
   line-height: 140%;
   letter-spacing: 0.56px;
   max-width: 705px;
   margin-right: 15px;

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      margin: 0px 0px 24px 0px;
      font-size: 24px;
      letter-spacing: 0.4px;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      font-size: 20px;
   }`}
`
