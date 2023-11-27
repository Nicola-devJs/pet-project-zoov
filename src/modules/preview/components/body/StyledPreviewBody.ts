import { styled } from 'styled-components'
import ellipse from '../../assets/ellipse.png'
import { StyledTitle } from '../../../../components/styled/title/StyledTitle'
import { StyledText } from '../../../../components/styled/text/StyledText'
import { StyledHighlightedWord } from '../../../../components/styled/highlightedWord/StyledHighlightedWord'

export const StylePreviewdBody = styled.div`
   max-width: 408px;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   z-index: 1;
`

export const PreviewHighlightedWord = styled(StyledHighlightedWord)`
   &::after {
      width: 260px;
      height: 91px;
      background-image: url('${ellipse}');

      ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
         width: 224px;
         height: 82px;
      }`}
      ${(props) => `@media(max-width: ${props.theme.media.phone}) {
         width: 182px;
         height: 64px;
      }`}
   }
`

export const PreviewTitle = styled(StyledTitle)`
   font-size: 54px;
   line-height: 1.08;
   margin-bottom: 10px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      font-size: 50px;
      line-height: .98;
      margin-bottom: 24px;
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      font-size: 44px;
      line-height: .88;
   }`}
`
export const PreviewText = styled(StyledText)`
   font-size: 20px;
   line-height: 140%;
   margin: 0px 70px 25px 0px;
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      font-size: 18px;
      margin: 0px 70px 48px 0px;
   }`}
`
