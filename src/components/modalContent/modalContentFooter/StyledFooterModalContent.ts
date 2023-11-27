import { styled } from 'styled-components'
import { StyledTitle } from '../../styled/title/StyledTitle'
import { StyledText } from '../../styled/text/StyledText'
import { StyledFlex } from '../../styled/flex/StyledFlex'

export const StyledFooterModalContent = styled(StyledFlex)`
   width: 100%;
   text-align: center;
`
export const ModalContentTitle = styled(StyledTitle)`
   color: ${(props) => props.theme.colors.red};
   font-size: 40px;
   margin-bottom: 16px;
   letter-spacing: 0.8px;
`

export const ModalContentText = styled(StyledText)`
   color: ${(props) => props.theme.colors.black};
   font-size: 15px;
`
