import React, { useContext } from 'react'
import {
   StyledRationsModalContent,
   ContentWrapper,
   ContentImg,
   ContentBody,
   ContentTitle,
   ContentSubTitle,
} from '../StyledRationsModalContent'
import {
   ContentForm,
   ContentFormAmountContainer,
   ContentFormBottom,
   ContentFormPrice,
} from './StyledRationsModalOrder'
import { IRationItem } from '../../../../modules/rations/components/list/rationsData'
import { Input } from '../../../../UI/input/Input'
import { Checkbox } from '../../../../UI/checkbox/Checkbox'
import { Button } from '../../../../UI/button/Button'
import { Counter } from '../../../../UI/counter/Counter'
import { Select } from '../../../../UI/select/Select'
import { ModalValueContext } from '../../../../context/ModalContext'
import { RationsModalFinishOrder } from '../modalFinishOrder/RationsModalFinishOrder'

interface RationsModalOrderProps {
   ration: IRationItem
}

export const RationsModalOrder: React.FC<RationsModalOrderProps> = ({
   ration,
}) => {
   const { onModal, onNextModal } = useContext(ModalValueContext)

   function submitRationOrder(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault()
      onNextModal(() =>
         onModal(<RationsModalFinishOrder rationImg={ration.img} />, 'default')
      )
   }

   return (
      <StyledRationsModalContent>
         <ContentWrapper>
            <ContentImg>
               <img src={ration.img} alt="ration" />
            </ContentImg>
            <ContentBody direction="column">
               <ContentTitle>{ration.title}</ContentTitle>
               <ContentSubTitle>{ration.subTitle}</ContentSubTitle>
               <ContentForm
                  as={'form'}
                  action="#"
                  direction="column"
                  onSubmit={submitRationOrder}
               >
                  <Input pattern="text" label="Имя" />
                  <Input pattern="number" label="Телефон" />
                  <Input pattern="text" label="Адрес" />
                  <ContentFormAmountContainer>
                     <Select
                        defaultValue="Выберите объем"
                        options={ration.grams}
                        prefix="г"
                     />
                     <Counter />
                  </ContentFormAmountContainer>
                  <Checkbox
                     label="Даю согласие на обработку персональных данных"
                     id="order_ration"
                     outlined
                     checked
                  />
                  <ContentFormBottom>
                     <ContentFormPrice>828₽</ContentFormPrice>
                     <Button outlined>Оформить заказ</Button>
                  </ContentFormBottom>
               </ContentForm>
            </ContentBody>
         </ContentWrapper>
      </StyledRationsModalContent>
   )
}
