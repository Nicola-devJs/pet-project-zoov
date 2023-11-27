import { styled } from 'styled-components'
import { StyledText } from '../../../styled/text/StyledText'
import { StyledTitle } from '../../../styled/title/StyledTitle'

export const ModalContentTitle = styled(StyledTitle)`
   color: ${(props) => props.theme.colors.red};
   font-size: 40px;
   margin-bottom: 22px;
   letter-spacing: 0.8px;
`

export const ModalContentText = styled(StyledText)`
   color: ${(props) => props.theme.colors.black};
   font-size: 15px;
`
export const ModalContentWrapperBody = styled.div`
   align-self: center;
   flex: 0 1 50%;

   & > *:not(:last-child) {
      margin-bottom: 22px;
   }
`
