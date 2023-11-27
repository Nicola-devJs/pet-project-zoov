import styled from 'styled-components'

export const StyledBarf = styled.div`
   padding: 180px 0px 100px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      padding: 100px 0px 70px;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      padding: 80px 0px 50px;
   }`}
`
