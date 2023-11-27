import { styled } from 'styled-components'

export const StyledRations = styled.div`
   padding: 103px 0px 90px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      padding: 73px 0px 60px;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      padding: 50px 0px 40px;
   }`}
`
