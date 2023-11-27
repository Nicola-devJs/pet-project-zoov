import React, { useContext } from 'react'
import {
   StyledModalContentRation,
   ContentHeader,
   ContentTitle,
   ContentText,
   ContentSocials,
   ContentFormWrapper,
   ContentFromColumn,
   ContentFromColumnContainer,
   ContentFromColumnContainerRadio,
   ContentFormFooter,
} from './StyledModalContentRation'
import { LinkSocial } from '../../../UI/link-social/LinkSocial'
import { Radio } from '../../../UI/radio/Radio'
import { Input } from '../../../UI/input/Input'
import { Checkbox } from '../../../UI/checkbox/Checkbox'
import { Button } from '../../../UI/button/Button'
import { ModalValueContext } from '../../../context/ModalContext'

export const ModalContentRation = () => {
   const { offModal } = useContext(ModalValueContext)
   function submitCalculateRationHandler(
      event: React.FormEvent<HTMLFormElement>
   ) {
      event.preventDefault()
      console.log('sending data ration')
      offModal()
   }

   return (
      <StyledModalContentRation>
         <ContentHeader>
            <ContentTitle>Рассчет рациона</ContentTitle>
            <ContentSocials>
               <LinkSocial icon="whatsapp" bg="default">
                  WhatsApp
               </LinkSocial>
               <LinkSocial icon="telegram" bg="default">
                  Telegram
               </LinkSocial>
            </ContentSocials>

            <ContentText>
               Заполните информацию и мы свяжемся с вами, чтобы подсказать с
               подбором рациона для вашего хвостика. Или напишите нам в
               мессендерах.
            </ContentText>
         </ContentHeader>
         <form onSubmit={submitCalculateRationHandler}>
            <ContentFormWrapper>
               <ContentFromColumn direction="column">
                  <ContentFromColumnContainerRadio
                     align="center"
                     style={{ marginBottom: 24 }}
                  >
                     <Radio name="ration">Взрослая собака</Radio>
                     <Radio name="ration" checked>
                        Щенок
                     </Radio>
                  </ContentFromColumnContainerRadio>
                  <ContentFromColumnContainer
                     align="center"
                     style={{ marginBottom: 16 }}
                  >
                     <Input label="Вес (кг)" pattern="number" />
                     <Input label="Возраст" pattern="number" />
                  </ContentFromColumnContainer>
                  <Input label="Ваше имя" pattern="text" />
               </ContentFromColumn>
               <ContentFromColumn direction="column">
                  <Input
                     label="Телефон"
                     pattern="number"
                     margin="0px 0px 16px 0px"
                  />
                  <Input
                     label="Если у вашего хвостика есть особенности здоровья – напишите об этом..."
                     pattern="text"
                     type="textarea"
                     height={'auto'}
                  />
               </ContentFromColumn>
            </ContentFormWrapper>
            <ContentFormFooter align="center" justify="space-between">
               <Checkbox
                  id="ration_checkbox"
                  checked
                  outlined
                  label="Даю согласие на обработку персональных данных"
               />
               <Button>Расчитать</Button>
            </ContentFormFooter>
         </form>
      </StyledModalContentRation>
   )
}
