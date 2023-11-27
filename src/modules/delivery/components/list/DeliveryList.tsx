import React from 'react'
import { StyledDeliveryList } from './StyledDeliveryList'
import { DeliveryItems } from './DeliveryData'
import { DeliveryListItem } from '../item/DeliveryListItem'

export const DeliveryList: React.FC = () => {
   return (
      <StyledDeliveryList>
         {DeliveryItems.map((item) => (
            <DeliveryListItem key={item.id} item={item} />
         ))}
      </StyledDeliveryList>
   )
}
