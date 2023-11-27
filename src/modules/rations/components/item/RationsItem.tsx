import { useContext } from 'react'
import {
   RationsItemGrams,
   RationsItemImg,
   RationsItemSubTitle,
   RationsItemText,
   RationsItemTitle,
   StyledRationsItem,
} from './StyledRationsItem'

import { Button } from '../../../../UI/button/Button'
import { IRationItem } from '../list/rationsData'
import { ModalValueContext } from '../../../../context/ModalContext'
import { RationsModalContent } from '../../../../components/modalContent/modalContentRationOrder/RationsModalContent'
import { gramsToText } from '../../../../helpers/gramsToText'
import { RationsModalOrder } from '../../../../components/modalContent/modalContentRationOrder/modalOrder/RationsModalOrder'

interface RationsItemProps {
   ration: IRationItem
   allRations: IRationItem[]
}

export const RationsItem: React.FC<RationsItemProps> = ({
   ration,
   allRations,
}) => {
   const { onModal } = useContext(ModalValueContext)
   const grams = gramsToText(ration.grams)

   function infoRationHandler() {
      onModal(
         <RationsModalContent ration={ration} allRations={allRations} />,
         'default'
      )
   }

   function orderRationHandler() {
      onModal(<RationsModalOrder ration={ration} />, 'default')
   }

   return (
      <StyledRationsItem>
         <RationsItemImg src={ration.img} onClick={infoRationHandler} />
         <RationsItemTitle as={'h4'} onClick={infoRationHandler}>
            {ration.title}
         </RationsItemTitle>
         <RationsItemSubTitle as={'h5'}>{ration.subTitle}</RationsItemSubTitle>
         <RationsItemText>{ration.text}</RationsItemText>
         <RationsItemGrams>{grams}</RationsItemGrams>
         <Button outlined onClick={orderRationHandler}>
            Заказать
         </Button>
      </StyledRationsItem>
   )
}
