import { styled } from 'styled-components'
import { StyledText } from '../../../../components/styled/text/StyledText'

export const StyledWhyListItem = styled.div`
   flex: 0 1 25%;
   padding: 12.5px;
   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      flex: 0 1 50%;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      flex: 1 1 100%;
      padding: 20px 12.5px;
   }`}
`
export const WhyItemImg = styled.img`
   width: 40px;
   height: 40px;
   margin-bottom: 16px;
`

export const WhyItemTitle = styled(StyledText)`
   color: ${(props) => props.theme.colors.black};
   font-weight: 600;
   font-size: 18px;
   margin-bottom: 8px;
`

export const WhyItemText = styled(StyledText)`
   color: ${(props) => props.theme.colors.black};
`
