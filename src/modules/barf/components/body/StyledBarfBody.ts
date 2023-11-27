import { styled } from 'styled-components'
import { StyledFlex } from '../../../../components/styled/flex/StyledFlex'

export const StyledBarfBody = styled(StyledFlex)`
   align-items: center;
   gap: 28px;
   margin-bottom: 80px;

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      flex-direction: column;
      margin-bottom: 0px;
   }`}
`
