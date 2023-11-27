import React from 'react'
import { StyledRations } from './StyledRations'
import { Container } from '../../components/styled/container/Container'
import { RationsTop } from './components/top/RationsTop'
import { RationsList } from './components/list/RationsList'
import { Calculate } from './components/calculate/Calculate'

const Rations: React.FC = () => {
   return (
      <StyledRations>
         <Container>
            <RationsTop />
            <RationsList />
            <Calculate />
         </Container>
      </StyledRations>
   )
}

export default Rations
