import React from 'react'
import {
   ProductsColumn,
   ProductsTitle,
   ProductsList,
   ProductsItem,
} from './StyledBarfProducts'
import { IBarfProductForDogs } from './barfProductsData'

interface BarfProductsColumnProps {
   product: {
      title: string
      list: IBarfProductForDogs[]
   }
}

export const BarfProductsColumn: React.FC<BarfProductsColumnProps> = ({
   product,
}) => {
   return (
      <ProductsColumn key={product.title}>
         <ProductsTitle>{product.title}</ProductsTitle>
         <ProductsList as={'ul'} direction="column">
            {product.list.map((item) => (
               <ProductsItem key={item.value} as={'li'} icon={item.icon}>
                  {item.value} – {item.percent}%
               </ProductsItem>
            ))}
         </ProductsList>
      </ProductsColumn>
   )
}
