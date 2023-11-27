import React from 'react'
import { StyledWhyList } from './StyledWhyList'
import { whyItems } from './whyData'
import { WhyListItem } from '../item/WhyListItem'

export const WhyList: React.FC = () => {
   return (
      <StyledWhyList>
         {whyItems.map((item) => (
            <WhyListItem key={item.id} item={item} />
         ))}
      </StyledWhyList>
   )
}
