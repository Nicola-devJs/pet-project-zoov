import React from 'react'
import { StyledText, TextProps } from './StyledText'

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
   return <StyledText {...props}>{children}</StyledText>
}
