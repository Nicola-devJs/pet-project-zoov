import React from 'react'
import {
   StyledFooterModalContent,
   ModalContentTitle,
   ModalContentText,
} from './StyledFooterModalContent'
export const FooterModalContent: React.FC = () => {
   return (
      <StyledFooterModalContent
         direction="column"
         align="center"
         justify="center"
      >
         <ModalContentTitle>Спасибо!</ModalContentTitle>
         <ModalContentText>Мы ответим вам в ближайшее время.</ModalContentText>
      </StyledFooterModalContent>
   )
}
