import { useContext } from 'react'
import { Button } from '../../../../UI/button/Button'
import { StyledCalculate, CalculateText } from './StyledCalculate'
import { ModalValueContext } from '../../../../context/ModalContext'
import { ModalContentRation } from '../../../../components/modalContent/modalContentRation/ModalContentRation'

export const Calculate: React.FC = () => {
   const { onModal } = useContext(ModalValueContext)

   function calculateRationHandler() {
      onModal(<ModalContentRation />, 'default')
   }

   return (
      <StyledCalculate>
         <CalculateText>
            Рассчитаем в каком количестве нужно кормить вашего хвостика
            рационами Zooov
         </CalculateText>
         <Button onClick={calculateRationHandler}>Расчитать</Button>
      </StyledCalculate>
   )
}
