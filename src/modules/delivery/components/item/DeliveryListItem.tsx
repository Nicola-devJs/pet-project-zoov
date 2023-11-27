import React, { useContext } from 'react'
import { IDeliveryItem } from '../list/DeliveryData'
import {
   StyledDeliveryListItem,
   DeliveryItemImg,
   DeliveryItemImgWrapper,
   DeliveryItemText,
   DeliveryItemTitle,
} from './StyledDeliveryListItem'
import { createLinkForString } from '../../../../helpers/createLinkForString'
import { ModalValueContext } from '../../../../context/ModalContext'
import { ModalContentRation } from '../../../../components/modalContent/modalContentRation/ModalContentRation'

interface DeliveryListItemProps {
   item: IDeliveryItem
}

export const DeliveryListItem: React.FC<DeliveryListItemProps> = ({ item }) => {
   const { onModal } = useContext(ModalValueContext)
   const text = createLinkForString('мы подскажем.', item.text)

   function rationModalHandler() {
      onModal(<ModalContentRation />, 'default')
   }

   return (
      <StyledDeliveryListItem>
         <DeliveryItemImgWrapper>
            <DeliveryItemImg src={item.icon} />
         </DeliveryItemImgWrapper>
         <DeliveryItemTitle>{item.title}</DeliveryItemTitle>
         <DeliveryItemText>
            {text ? (
               <>
                  {text}
                  <span onClick={rationModalHandler}>мы подскажем.</span>
               </>
            ) : (
               item.text
            )}
         </DeliveryItemText>
      </StyledDeliveryListItem>
   )
}
