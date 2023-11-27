import { useContext } from 'react'
import { Button } from '../../../UI/button/Button'
import { Checkbox } from '../../../UI/checkbox/Checkbox'
import { Input } from '../../../UI/input/Input'
import {
   StyledFooterForm,
   FooterFormLabel,
   FooterFormSubLabel,
   FooterFormWrraper,
   FooterFormInputContainer,
   FooterFormBottom,
} from './StyledFooterForm'
import { ModalValueContext } from '../../../context/ModalContext'
import { FooterModalContent } from '../../../components/modalContent/modalContentFooter/FooterModalContent'

export const FooterForm = () => {
   const { onModal } = useContext(ModalValueContext)

   function submitQuestionHandler(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault()
      onModal(<FooterModalContent />, 'small')
   }

   return (
      <StyledFooterForm>
         <FooterFormLabel>Остались вопросы?</FooterFormLabel>
         <FooterFormSubLabel>
            Напишите нам и мы обязательно подробно на них ответим.
         </FooterFormSubLabel>

         <FooterFormWrraper onSubmit={submitQuestionHandler}>
            <FooterFormInputContainer>
               <Input label="Имя" pattern="text" outlined />
               <Input label="Email" pattern="email" outlined />
            </FooterFormInputContainer>
            <Input
               type="textarea"
               label="Ваш вопрос..."
               pattern="text"
               outlined
               height={122}
            />
            <FooterFormBottom align="center" justify="space-between">
               <Checkbox
                  id="dataProcessing"
                  label="Даю согласие на обработку персональных данных"
               />
               <Button transparence>Отправить</Button>
            </FooterFormBottom>
         </FooterFormWrraper>
      </StyledFooterForm>
   )
}
