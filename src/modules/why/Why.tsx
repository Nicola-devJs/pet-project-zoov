import React from 'react'
import { StyledWhy, WhyTitle } from './StyledWhy'
import { Container } from '../../components/styled/container/Container'
import { WhyList } from './components/list/WhyList'

const Why: React.FC = () => {
   return (
      <StyledWhy>
         <Container>
            <WhyTitle>Почему ZOOOV</WhyTitle>
            <WhyList />
         </Container>
      </StyledWhy>
   )
}

export default Why
