import React from 'react'
import { StyledButton } from './StyledButton'

export interface ButtonProps {
   children: string
   margin?: string
   outlined?: boolean
   transparence?: boolean
   onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
   return <StyledButton {...props}>{children}</StyledButton>
}
