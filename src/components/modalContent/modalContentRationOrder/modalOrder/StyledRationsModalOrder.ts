import { styled } from 'styled-components'
import { StyledFlex } from '../../../styled/flex/StyledFlex'
import { StyledSelect } from '../../../../UI/select/StyledSelect'
import { StyledCounter } from '../../../../UI/counter/StyledCounter'

export const ContentForm = styled(StyledFlex)`
   height: 100%;
   & > *:not(:last-child) {
      margin-bottom: 16px;
   }

   & label {
      flex: 1 1 auto;
   }
`
export const ContentFormBottom = styled(StyledFlex)`
   justify-content: space-between;
   align-items: center;
`

export const ContentFormPrice = styled.p`
   color: #000;
   font-family: Roboto;
   font-size: 20px;
   font-weight: 500;
   line-height: 130%;
   letter-spacing: 0.4px;
`
export const ContentFormAmountContainer = styled(StyledFlex)`
   justify-content: space-between;
   gap: 24px;
   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      flex-direction: column;
      gap: 16px;
      ${StyledSelect} {
         width: 100%;
      }

      ${StyledCounter} {
         width: 100%;
      }
   }`}
`
