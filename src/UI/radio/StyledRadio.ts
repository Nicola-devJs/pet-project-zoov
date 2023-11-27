import { styled } from 'styled-components'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'
import { StyledText } from '../../components/styled/text/StyledText'

export const RadioFake = styled.span`
   display: inline-block;
   flex: 0 0 16px;
   height: 16px;
   border-radius: 50%;
   border: 1px solid ${(props) => props.theme.colors.gray};
   margin-right: 8px;
   position: relative;
   transition: border 0.1s linear;

   &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.red};
      opacity: 0;
      transition: opacity 0.1s linear;
   }
`

export const RadioLabel = styled(StyledText)`
   color: ${(props) => props.theme.colors.black};
   font-size: 14px;
   text-wrap: nowrap;
`
export const StyledRadio = styled(StyledFlex)`
   cursor: pointer;
   & input:checked + ${RadioFake} {
      border: 1px solid ${(props) => props.theme.colors.red};
      &:before {
         opacity: 1;
      }
   }
`
