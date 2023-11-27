import React from 'react'
import { StyledContainer } from './StyledContainer'

interface ContainerProps {
   children: React.ReactElement | React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
   return <StyledContainer>{children}</StyledContainer>
}
