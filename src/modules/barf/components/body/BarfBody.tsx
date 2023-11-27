import React from 'react'
import { StyledBarfBody } from './StyledBarfBody'

interface BarfBodyProps {
   children: React.ReactElement | React.ReactNode
}

export const BarfBody: React.FC<BarfBodyProps> = ({ children }) => {
   return <StyledBarfBody>{children}</StyledBarfBody>
}
