import { Container } from '../../../components/styled/container/Container'
import { StyledFooterBody } from './StyledFooterBody'
import { FooterContacts } from '../contacts/FooterContacts'
import { FooterForm } from '../form/FooterForm'

export const FooterBody = () => {
   return (
      <Container>
         <StyledFooterBody>
            <FooterContacts />
            <FooterForm />
         </StyledFooterBody>
      </Container>
   )
}
