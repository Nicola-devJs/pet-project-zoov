import { styled } from 'styled-components'
import { StyledTitle } from '../../../../components/styled/title/StyledTitle'
import { StyledText } from '../../../../components/styled/text/StyledText'

export const StyledAboutContent = styled.div`
   flex: 1 1 auto;
`
export const AboutTitle = styled(StyledTitle)`
   margin-bottom: 40px;
`
export const AboutText = styled(StyledText)`
   & p:not(:last-child) {
      margin-bottom: 20px;
   }
`
