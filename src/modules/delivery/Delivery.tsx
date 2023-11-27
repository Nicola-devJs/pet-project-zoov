import React from 'react'
import { StyledDelivery, DeliveryTitle } from './StyledDelivery'
import { Container } from '../../components/styled/container/Container'
import { DeliveryList } from './components/list/DeliveryList'

const Delivery: React.FC = () => {
   return (
      <StyledDelivery>
         <Container>
            <DeliveryTitle>Как получить ZOOOV?</DeliveryTitle>
            <DeliveryList />
         </Container>
      </StyledDelivery>
   )
}

export default Delivery
