import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './style.css'

interface SwiperSliderProps {
   children: React.ReactElement[]
   type: string
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({ children, type }) => {
   return (
      <Swiper
         slidesPerView={2}
         pagination={{
            clickable: true,
         }}
         breakpoints={
            type === 'barf-products'
               ? {
                    '769': {
                       slidesPerView: 2,
                       allowTouchMove: false,
                    },
                    '320': {
                       allowTouchMove: true,
                       slidesPerView: 1,
                       spaceBetween: 10,
                    },
                 }
               : {
                    '1251': {
                       slidesPerView: 4,
                    },
                    '970': {
                       slidesPerView: 3,
                    },
                    '670': {
                       slidesPerView: 2,
                    },
                    '0': {
                       slidesPerView: 1,
                       spaceBetween: 0,
                    },
                 }
         }
         modules={[Pagination]}
         className="mySwiper"
      >
         {children.map((slide) => (
            <SwiperSlide key={slide.key}>{slide}</SwiperSlide>
         ))}
      </Swiper>
   )
}

export { SwiperSlider }
