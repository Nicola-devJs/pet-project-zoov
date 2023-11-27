import { StyledFooter } from './StyledFooter'
import { FooterBody } from './body/FooterBody'
import { Copyright } from './copyright/Copyright'

const Footer: React.FC = () => {
   return (
      <StyledFooter>
         <FooterBody />
         <Copyright />
      </StyledFooter>
   )
}

export default Footer
