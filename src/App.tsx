import { useContext } from 'react'
import { StyleSheetManagerComponent } from './styles'
import { RenderOnViewportEntry } from './components/RenderOnViewportEntry'
import { Modal } from './UI/modal/Modal'
import { ModalValueContext } from './context/ModalContext'
import { rootComponents } from './rootComponents'

function App() {
   const { isOpen, offModal, getContent, widthModal } =
      useContext(ModalValueContext)

   return (
      <StyleSheetManagerComponent>
         {rootComponents.map((Component) => (
            <RenderOnViewportEntry id={Component.id} key={Component.id}>
               <Component.Root />
            </RenderOnViewportEntry>
         ))}
         <Modal
            modal={isOpen}
            content={getContent}
            closeModal={offModal}
            width={widthModal}
         />
      </StyleSheetManagerComponent>
   )
}

export default App
