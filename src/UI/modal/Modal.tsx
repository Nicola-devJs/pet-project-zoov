import React from 'react'
import {
   Close,
   ModalBody,
   ModalOverlay,
   ModalWrapper,
   StyledModal,
} from './StyledModal'
import { TypeWidthModal } from '../../context/ModalContext'

interface ModalProps {
   modal: boolean
   closeModal: () => void
   content: React.ReactNode | React.ReactElement
   width: TypeWidthModal
}

export const Modal: React.FC<ModalProps> = ({
   modal = false,
   closeModal,
   content,
   width,
}) => {
   function closeModalHandler() {
      closeModal()
   }

   return (
      <StyledModal open={modal}>
         <ModalOverlay onClick={closeModalHandler} open={modal} />
         <ModalWrapper justify="center" align="center">
            <ModalBody open={modal} width={width}>
               {content}
               <Close onClick={closeModalHandler} />
            </ModalBody>
         </ModalWrapper>
      </StyledModal>
   )
}
