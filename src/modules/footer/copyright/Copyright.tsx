import { Container } from '../../../components/styled/container/Container'
import {
   StyledCopyright,
   CopyrightText,
   CopyrightLink,
   CopyrightBody,
} from './StyledCopyright'

export const Copyright = () => {
   return (
      <StyledCopyright>
         <Container>
            <CopyrightBody>
               <CopyrightText>
                  ИП Коваленко Евгений Геннадьевич ИНН784215731801, адрес
                  производства г. Санкт-Петербург 17-я линия В.О 66, пом. 2/07
               </CopyrightText>
               <CopyrightLink as={'a'} href="#">
                  Публичная оферта
               </CopyrightLink>
               <CopyrightLink as={'a'} href="#">
                  Политика конфеденциальности
               </CopyrightLink>
            </CopyrightBody>
         </Container>
      </StyledCopyright>
   )
}
