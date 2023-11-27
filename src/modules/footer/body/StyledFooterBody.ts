import { styled } from 'styled-components'
import { StyledFlex } from '../../../components/styled/flex/StyledFlex'

export const StyledFooterBody = styled(StyledFlex)`
   gap: 24px;
   justify-content: space-between;
   align-items: center;
   padding: 80px 0px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      padding: 56px 0px;
      flex-direction: column;
      gap: 56px;
   }`}
`
