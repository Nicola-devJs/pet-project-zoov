import { styled } from 'styled-components'
import { StyledFlex } from '../../../../components/styled/flex/StyledFlex'
import { StyledHighlightedWord } from '../../../../components/styled/highlightedWord/StyledHighlightedWord'
import { StyledTitle } from '../../../../components/styled/title/StyledTitle'
import { StyledText } from '../../../../components/styled/text/StyledText'
import ellipse from '../../assets/ellipse.png'

export const StyledRationsTop = styled(StyledFlex)`
   align-items: center;
   margin-bottom: 80px;
`
export const RationsHighlightedWord = styled(StyledHighlightedWord)`
   &:after {
      width: 181.041px;
      height: 67.771px;
      background-image: url(${ellipse});
   }
`
export const RationsTopTitle = styled(StyledTitle)`
   text-wrap: nowrap;
   margin-right: 97px;
`
export const RationsTopText = styled(StyledText)`
   color: ${(props) => props.theme.colors.black};
   line-height: 140%;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
   display: none;
}`}
`
