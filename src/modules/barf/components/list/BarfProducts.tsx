import React from 'react'
import { StyledBarfProducts } from './StyledBarfProducts'
import { BarfProductsColumn } from './BarfProductsColumn'
import products from './barfProductsData'
import { SwiperSlider } from '../../../../UI/slider/SwiperSlider'

export const BarfProducts: React.FC = () => {
   return (
      <StyledBarfProducts>
         <SwiperSlider type="barf-products">
            {products.map((product) => (
               <BarfProductsColumn key={product.title} product={product} />
            ))}
         </SwiperSlider>
      </StyledBarfProducts>
   )
}
