import 'styled-components'

declare module 'styled-components' {
   export interface DefaultTheme {
      colors: {
         red: string
         pink: string
         lightPink: string
         black: string
         gray: string
         lightGray: string
         white: string
      }
      media: {
         notebook: string
         tablet: string
         phone: string
      }
      fontSize: {
         title: number
         text: number
      }
      fonst: {
         montserrat: string
         oswald: string
         roboto: string
      }
   }
}
