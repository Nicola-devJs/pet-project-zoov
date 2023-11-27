import { styled } from 'styled-components'

interface IStyledLinkSocial {
   bg: string
   height?: number
}

export const StyledLinkSocial = styled.a<IStyledLinkSocial>`
   display: flex;
   width: max-content;
   height: max-content;
   align-items: center;
   padding: 8px 16px 8px 12px;
   border-radius: 8px;
   transition: all 0.2s linear;
   background: ${(props) =>
      props.bg === 'white'
         ? 'rgba(255, 255, 255, 0.2)'
         : 'rgba(150, 25, 20, 0.2)'};
   color: ${(props) =>
      props.bg === 'white' ? '#fff' : props.theme.colors.red};
   font-size: 14px;
   font-weight: 500;
   cursor: pointer;

   &:before {
      content: '';

      font-size: 24px;

      width: 24px;
      height: 24px;
      margin-right: 8px;
   }

   &:hover {
      background: ${(props) =>
         props.bg === 'white'
            ? 'rgba(255, 255, 255, 0.4)'
            : 'rgba(150, 25, 20, 0.4)'};
   }
`
