import React from 'react'
import { FlexProps, StyledFlex } from './StyledFlex'

export const Flex: React.FC<FlexProps> = ({
   children,
   className,
   ...props
}) => {
   return (
      <StyledFlex {...props} className={className}>
         {children}
      </StyledFlex>
   )
}
