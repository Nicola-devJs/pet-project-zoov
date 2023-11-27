import React, { useContext } from 'react'
import {
   PreviewText,
   PreviewTitle,
   StylePreviewdBody,
   PreviewHighlightedWord,
} from './StyledPreviewBody'
import { Button } from '../../../../UI/button/Button'
import { ModalValueContext } from '../../../../context/ModalContext'
import { ModalContentRation } from '../../../../components/modalContent/modalContentRation/ModalContentRation'

export const PreviewBody: React.FC = () => {
   const { onModal } = useContext(ModalValueContext)

   function calculateRationsHandler() {
      onModal(<ModalContentRation />, 'default')
   }

   return (
      <StylePreviewdBody>
         <PreviewTitle as="h1" color="#fff">
            Питание, которое{' '}
            <PreviewHighlightedWord>полюбит</PreviewHighlightedWord> ваш хвостик
         </PreviewTitle>
         <PreviewText color="#fff">
            Натуральные рационы питания для собак по системе BARF
         </PreviewText>
         <Button onClick={calculateRationsHandler}>Выбрать рацион</Button>
      </StylePreviewdBody>
   )
}
