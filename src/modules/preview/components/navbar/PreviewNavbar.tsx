import React from 'react'
import { StyledPreviewNavbar, NavbarFixed } from './StyledPreviewNavbar'

interface NavbarProps {
   children: React.ReactElement | React.ReactNode
}

type refNode = HTMLDivElement

export const PreviewNavbar = React.forwardRef<refNode, NavbarProps>(
   ({ children, ...props }, ref) => {
      return (
         <StyledPreviewNavbar {...props} ref={ref}>
            <NavbarFixed align="center" justify="space-between">
               {children}
            </NavbarFixed>
         </StyledPreviewNavbar>
      )
   }
)
