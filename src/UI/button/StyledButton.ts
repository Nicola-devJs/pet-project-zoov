import { styled, css } from 'styled-components'

interface StyledButtonProps {
   margin?: string
   outlined?: boolean
   transparence?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
   min-height: 48px;
   border-radius: 8px;
   background: ${(props) => props.theme.colors.red};
   color: #fff;
   font-weight: 600;
   font-size: ${(props) => props.theme.fontSize.text}px;
   padding: 0px 42px;
   cursor: pointer;
   transition: all 0.2s ease;
   ${(props) =>
      props.outlined &&
      css`
         outline: 1px solid ${props.theme.colors.red};
         background: ${props.theme.colors.white};
         color: ${props.theme.colors.red};
      `}

   ${(props) =>
      props.transparence &&
      css`
         background: ${props.theme.colors.lightPink};
         color: #ec7973;
         font-weight: 700;
      `}

   &:hover {
      background: #75110d;

      ${(props) =>
         props.outlined &&
         css`
            outline: 1px solid transparent;
            background: ${props.theme.colors.pink};
         `}

      ${(props) =>
         props.transparence &&
         css`
            background: ${props.theme.colors.pink};
            color: ${props.theme.colors.red};
         `}
   }
`
