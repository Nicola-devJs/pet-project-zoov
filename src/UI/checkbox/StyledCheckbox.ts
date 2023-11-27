import { styled } from 'styled-components'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'
import check from './check.svg'

interface ICheckbox {
   outlined?: boolean
}

export const CheckboxFake = styled.span<ICheckbox>`
   position: relative;
   display: inline-block;
   flex: 0 0 16px;
   height: 16px;
   border-radius: 2px;
   ${(props) =>
      props.outlined && `border: 1px solid ${props.theme.colors.lightGray};`}
   background: #fff;
   margin-right: 8px;

   &:before {
      content: '';
      position: absolute;
      width: 10px;
      height: 8px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url(${check});
      background-repeat: no-repeat;
      opacity: 0;
      transition: all 0.1s linear;
   }
`

export const CheckboxContainer = styled(StyledFlex)<ICheckbox>`
   align-items: flex-start;
   cursor: pointer;
   & input:checked + ${CheckboxFake} {
      ${(props) =>
         props.outlined && `border: 1px solid ${props.theme.colors.red};`}
      &:before {
         opacity: 1;
      }
   }
`

export const CheckboxText = styled.span<ICheckbox>`
   color: ${(props) =>
      props.outlined ? props.theme.colors.lightGray : props.theme.colors.white};
   font-family: Montserrat;
   font-size: 12px;
   font-weight: 400;
   line-height: 140%;
`
