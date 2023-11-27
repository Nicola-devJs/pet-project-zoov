import React, { useRef } from 'react'
import { StyledBarf } from './StyledBarf'
import { Container } from '../../components/styled/container/Container'
import { BarfBody } from './components/body/BarfBody'
import { BarfProducts } from './components/list/BarfProducts'
import { BarfContent } from './components/content/BarfContent'
import { BarfPicture } from './components/picture/BarfPicture'

const Barf: React.FC = () => {
   const refNode = useRef<HTMLDivElement>(null)

   return (
      <StyledBarf ref={refNode}>
         <Container>
            <BarfBody>
               <BarfContent />
               <BarfPicture />
            </BarfBody>
            <BarfProducts />
         </Container>
      </StyledBarf>
   )
}

export default Barf
