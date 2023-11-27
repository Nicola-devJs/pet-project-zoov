import React from 'react'
import { IWhyItem } from '../list/whyData'
import {
   StyledWhyListItem,
   WhyItemImg,
   WhyItemText,
   WhyItemTitle,
} from './StyledWhyListItem'

interface WhyListItemProps {
   item: IWhyItem
}

export const WhyListItem: React.FC<WhyListItemProps> = ({ item }) => {
   return (
      <StyledWhyListItem>
         <WhyItemImg src={item.icon} />
         <WhyItemTitle>{item.title}</WhyItemTitle>
         <WhyItemText>{item.text}</WhyItemText>
      </StyledWhyListItem>
   )
}
