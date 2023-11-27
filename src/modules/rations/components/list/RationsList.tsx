import { RationsItem } from '../item/RationsItem'
import { StyledRationsList } from './StyledRationsList'
import { rationsData } from './rationsData'
import { SwiperSlider } from '../../../../UI/slider/SwiperSlider'

export const RationsList = () => {
   return (
      <StyledRationsList>
         <SwiperSlider type="rations">
            {rationsData.map((ration, _, all) => (
               <RationsItem key={ration.id} ration={ration} allRations={all} />
            ))}
         </SwiperSlider>
      </StyledRationsList>
   )
}
