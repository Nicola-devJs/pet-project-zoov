import React, { useContext } from 'react'
import {
   StyledRationsModalContent,
   ContentWrapper,
   ContentBody,
   ContentVariants,
   ContentImg,
   ContentTitle,
   ContentSubTitle,
   ContentDescription,
   ContentText,
   ContentGrams,
   ContentOtherRation,
} from './StyledRationsModalContent'
import { IRationItem } from '../../../modules/rations/components/list/rationsData'
import { gramsToText } from '../../../helpers/gramsToText'
import { Button } from '../../../UI/button/Button'
import { ModalValueContext } from '../../../context/ModalContext'
import { RationsModalOrder } from './modalOrder/RationsModalOrder'

interface RationsModalContentProps {
   ration: IRationItem
   allRations: IRationItem[]
}

export const RationsModalContent: React.FC<RationsModalContentProps> = ({
   ration,
   allRations,
}) => {
   const { onModal, onNextModal } = useContext(ModalValueContext)
   const grams = gramsToText(ration.grams)

   const otherRations = allRations.filter((otherRation) => {
      if (otherRation.id !== ration.id) {
         return otherRation
      }
   })

   function orderRationHandler() {
      onNextModal(() =>
         onModal(<RationsModalOrder ration={ration} />, 'default')
      )
   }

   function switchingOtherRationHandler(ration: IRationItem) {
      onNextModal(() =>
         onModal(
            <RationsModalContent ration={ration} allRations={allRations} />,
            'default'
         )
      )
   }

   return (
      <StyledRationsModalContent>
         <ContentWrapper>
            <ContentImg>
               <img src={ration.img} alt="ration" />
            </ContentImg>
            <ContentBody direction="column">
               <ContentTitle>{ration.title}</ContentTitle>
               <ContentSubTitle>{ration.subTitle}</ContentSubTitle>
               <ContentText>{ration.text}</ContentText>
               <ContentDescription>
                  <span>Состав: </span>Мякоть баранины (46,5%), мясо кролика
                  (23,5%), кости кролика (10%), печень баранины (5%), почки
                  бараньи (2,5%), рубец бараний (2,5%), кабачок (3%), брокколи
                  (3%), семена конопли (2%), шпинат (1%), яблоко (1%), льняное
                  масло, конопляное масло.
               </ContentDescription>
               <ContentText>
                  <span>Пищевая ценность на 100г: </span>174.9 ккал, белки
                  16.45, жиры 11.9, углеводы 0.60
               </ContentText>
               <ContentGrams>{grams}</ContentGrams>
            </ContentBody>
         </ContentWrapper>
         <ContentWrapper align="flex-end">
            <ContentVariants>
               {otherRations.map((ration) => (
                  <ContentOtherRation
                     key={ration.id}
                     onClick={() => switchingOtherRationHandler(ration)}
                     img={ration.img}
                  />
               ))}
            </ContentVariants>
            <ContentBody>
               <Button outlined onClick={orderRationHandler}>
                  Заказать
               </Button>
            </ContentBody>
         </ContentWrapper>
      </StyledRationsModalContent>
   )
}
