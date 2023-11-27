import { styled } from 'styled-components'
import { StyledTitle } from '../../../../components/styled/title/StyledTitle'
import { StyledText } from '../../../../components/styled/text/StyledText'

export const StyledBarfContent = styled.div`
   flex: 0 1 584px;
   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      flex: 1 1 auto;
   }`}
`

export const BarfTitle = styled(StyledTitle)`
   margin-bottom: 32px;
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      margin-bottom: 24px;
   }`}
`
export const BarfText = styled(StyledText)`
   margin-bottom: 24px;
`
export const BarfTitleList = styled.h4`
   color: ${(props) => props.theme.colors.black};
   font-size: 18px;
   line-height: 130%;
   font-weight: 600;
   margin-bottom: 16px;
`
export const BarfList = styled.ul`
   & li {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.gray};
      line-height: 140%;
      &::before {
         content: '';
         width: 6px;
         height: 6px;
         border-radius: 50%;
         background: ${(props) => props.theme.colors.red};
         margin-right: 6px;
      }

      &:not(:last-child) {
         margin-bottom: 16px;
      }
   }
`
