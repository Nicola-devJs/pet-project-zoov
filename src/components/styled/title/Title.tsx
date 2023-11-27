import React from 'react'
import { StyledTitle, TitleProps } from './StyledTitle'

export const Title: React.FC<TitleProps> = ({ children, ...props }) => {
   return <StyledTitle {...props}>{children}</StyledTitle>
}
