import { styled } from 'styled-components'

export const StyledRationsList = styled.div`
   margin-bottom: 80px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      margin-bottom: 60px;
   }`}
`
