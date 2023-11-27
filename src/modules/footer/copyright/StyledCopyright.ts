import { styled } from 'styled-components'
import { StyledFlex } from '../../../components/styled/flex/StyledFlex'

export const StyledCopyright = styled.div`
   background: #69120e;
   height: 76px;
   opacity: 0.4;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      height: auto;
      padding: 24px 0px;
   }`}
`

export const CopyrightBody = styled(StyledFlex)`
   justify-content: space-between;
   align-items: center;
   height: 100%;

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0px;
   }`}
`
export const CopyrightText = styled.p`
   color: ${(props) => props.theme.colors.white};
   font-size: 12px;
   font-weight: 400;
   line-height: 140%;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      margin-bottom: 24px;
   }`}
`

export const CopyrightLink = styled(CopyrightText)`
   text-decoration: none;
   &:hover {
      text-decoration: underline;
   }
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      margin-bottom: 0px;
      &:not(:last-child) {
         margin-bottom: 8px;
      }
}`}
`
