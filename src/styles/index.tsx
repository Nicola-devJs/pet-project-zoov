import React from 'react'
import isPropValid from '@emotion/is-prop-valid'
import { ThemeProvider, StyleSheetManager } from 'styled-components'
import { baseTheme } from './theme'
import { GlobalStyles } from './global'

interface StyleSheetManagerProps {
   children: React.ReactElement | React.ReactNode
}

function shouldForwardProp(propName: string, target: unknown) {
   if (typeof target === 'string') {
      // For HTML elements, forward the prop if it is a valid HTML attribute
      return isPropValid(propName)
   }
   // For other elements, forward all props
   return true
}

export const StyleSheetManagerComponent: React.FC<StyleSheetManagerProps> = ({
   children,
}) => {
   return (
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
         <ThemeProvider theme={baseTheme}>
            <GlobalStyles />
            {children}
         </ThemeProvider>
      </StyleSheetManager>
   )
}
