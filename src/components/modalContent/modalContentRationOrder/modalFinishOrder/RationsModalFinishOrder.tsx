import React from 'react'
import {
   StyledRationsModalContent,
   ContentWrapper,
   ContentImg,
} from '../StyledRationsModalContent'

import {
   ModalContentText,
   ModalContentTitle,
   ModalContentWrapperBody,
} from './StyledRationsModalFinishOrder'

interface RationsModalFinishOrderProps {
   rationImg: string
}

export const RationsModalFinishOrder: React.FC<
   RationsModalFinishOrderProps
> = ({ rationImg }) => {
   return (
      <StyledRationsModalContent>
         <ContentWrapper>
            <ContentImg>
               <img src={rationImg} alt="ration" />
            </ContentImg>
            <ModalContentWrapperBody>
               <ModalContentTitle>Спасибо!</ModalContentTitle>
               <ModalContentText>
                  Ваш заказ оформлен и передан менеджеру. Мы свяжемся с вами для
                  уточнения и подтверждения в ближайшее время.
               </ModalContentText>
               <ModalContentText>
                  Если вы захотите дополнить свой заказ или уточнить какие-то
                  детали – вы сможете это сделать у оператора.
               </ModalContentText>
            </ModalContentWrapperBody>
         </ContentWrapper>
      </StyledRationsModalContent>
   )
}
