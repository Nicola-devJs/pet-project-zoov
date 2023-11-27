import { useRef } from 'react'
import { Container } from '../../components/styled/container/Container'
import { PreviewNavbar } from './components/navbar/PreviewNavbar'
import { PreviewMenu } from './components/menu/PreviewMenu'
import { PreviewBody } from './components/body/PreviewBody'
import { StyledPreview, PreviewLabel } from './StyledPreview'
import { useFixedMenuToScrollPage } from './hooks/useFixedNavbarToScrollPage'

const Preview: React.FC = () => {
   const navbar = useRef<HTMLDivElement>(null)
   useFixedMenuToScrollPage((isView) => {
      if (isView) {
         navbar.current?.classList.add('header_fixed')
      } else {
         navbar.current?.classList.remove('header_fixed')
      }
   })

   return (
      <StyledPreview>
         <Container>
            <PreviewNavbar ref={navbar}>
               <PreviewMenu />
            </PreviewNavbar>
            <PreviewBody />
         </Container>
         <PreviewLabel />
      </StyledPreview>
   )
}

export default Preview
