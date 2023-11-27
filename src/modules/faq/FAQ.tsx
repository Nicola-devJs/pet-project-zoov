import { Container } from '../../components/styled/container/Container'
import { StyledFAQ, FAQTitle, FAQBody } from './StyledFAQ'
import { FAQList } from './list/FAQList'

const FAQ: React.FC = () => {
   return (
      <StyledFAQ>
         <Container>
            <FAQBody>
               <FAQTitle>Частые вопросы</FAQTitle>
               <FAQList />
            </FAQBody>
         </Container>
      </StyledFAQ>
   )
}

export default FAQ
