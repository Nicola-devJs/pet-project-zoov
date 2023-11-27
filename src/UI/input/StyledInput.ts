import { css, styled } from 'styled-components'
import { StyledText } from '../../components/styled/text/StyledText'

interface StyledInputProps {
   outlined?: boolean
   height?: number | 'auto'
   margin?: string
}

export const InputContainer = styled.div<StyledInputProps>`
   width: 100%;
   overflow: hidden;
   height: ${(props) =>
      typeof props.height === 'number' ? `${props.height}px` : props.height};
   position: relative;
   ${(props) => props.margin && `margin: ${props.margin};`}
`

export const InputLabel = styled(StyledText)<StyledInputProps>`
   position: absolute;
   left: 15px;
   top: 15px;
   pointer-events: none;
   font-size: 14px;
   opacity: 0.6;
   color: ${(props) =>
      props.outlined ? props.theme.colors.white : props.theme.colors.black};
   font-size: 14px;
   line-height: 140%;
   transition: all 0.1s linear;
`

export const StyledInput = styled.input<StyledInputProps>`
   width: 100%;
   height: 100%;
   border-radius: 8px;
   padding: 22px 15px 6px 15px;
   color: ${(props) =>
      props.outlined ? props.theme.colors.white : props.theme.colors.black};
   font-size: 14px;
   line-height: 140%;
   font-family: Montserrat;
   font-weight: 400;
   resize: none;
   border: none;

   ${(props) =>
      props.outlined
         ? css`
              border: 1px solid rgba(255, 255, 255, 0.5);
              background: rgba(255, 255, 255, 0.05);
           `
         : `background: #F4F5F5;`}

   &:focus {
      outline: none;
   }

   &:focus ~ ${InputLabel}, &:valid ~ ${InputLabel} {
      top: 5px;
      font-size: 12px;
      white-space: nowrap;
      &:first-line {
         text-overflow: ellipsis;
      }
   }

   &[type='number']::-webkit-outer-spin-button,
   &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
   }

   &[type='number'],
   &[type='number']:hover,
   &[type='number']:focus {
      appearance: none;
      -moz-appearance: textfield;
   }
`
