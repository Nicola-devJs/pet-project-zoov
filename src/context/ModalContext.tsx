import React, { createContext, useState } from 'react'
import { blockScrollPage } from '../helpers/blockedScroll'

export type TypeWidthModal = number | 'default' | 'small'

export interface optionsModalProps {
   isOpen: boolean
   onModal: (node: React.ReactNode, width: TypeWidthModal) => void
   offModal: () => void
   getContent: React.ReactNode
   widthModal: TypeWidthModal
   onNextModal: (openModal: () => void) => void
}

interface ModalContextProps {
   children: React.ReactElement
}

export const ModalValueContext = createContext<optionsModalProps>({
   isOpen: false,
   onModal: () => {},
   offModal: () => {},
   getContent: <div></div>,
   widthModal: 0,
   onNextModal: () => {},
})

export const ModalContext: React.FC<ModalContextProps> = ({ children }) => {
   const [modalOpen, setModalOpen] = useState<boolean>(false)
   const [width, setWidth] = useState<TypeWidthModal>('default')
   const [content, setContent] = useState<React.ReactNode>('')

   const offModal = () => {
      blockScrollPage(false)
      setModalOpen(false)
      setContent('')
      setWidth('default')
   }
   const onModal = (node: React.ReactNode, width: TypeWidthModal) => {
      setModalOpen(true)
      blockScrollPage(true)
      setWidth(width)
      setContent(node)
   }

   const onNextModal = (openModal: () => void) => {
      offModal()
      setTimeout(openModal, 200)
   }

   const optionsModal: optionsModalProps = {
      isOpen: modalOpen,
      onModal,
      offModal,
      getContent: content,
      widthModal: width,
      onNextModal,
   }

   return (
      <ModalValueContext.Provider value={optionsModal}>
         {children}
      </ModalValueContext.Provider>
   )
}
