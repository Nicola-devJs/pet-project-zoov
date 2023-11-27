import { styled } from 'styled-components'
import { StyledFlex } from '../../../../components/styled/flex/StyledFlex'

export const StyledWhyList = styled(StyledFlex)`
   margin: 0px -12.5px;
   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      flex-wrap: wrap;
   }`}
`
