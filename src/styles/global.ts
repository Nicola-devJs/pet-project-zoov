import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   ul {
      list-style: none;
   }

   button {
      border: none;
   }

   body {
      font-family: ${(props) => props.theme.fonst.montserrat};
      font-weight: 400;
      font-size: ${(props) => props.theme.fontSize.text}px;
   }
`
