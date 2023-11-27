import ration_1 from '../../assets/1.png'
import ration_2 from '../../assets/2.png'
import ration_3 from '../../assets/3.png'
import ration_4 from '../../assets/4.png'

export interface IRationItem {
   id: number
   img: string
   title: string
   subTitle: string
   text: string
   grams: number[]
}

export const rationsData: IRationItem[] = [
   {
      id: 1,
      img: ration_1,
      title: 'Для взрослых собак',
      subTitle: 'Индейка/Говядина',
      text: 'Подходит для ежедвеного кормления. Богат животными белками и Омега-3.',
      grams: [700, 500, 300, 150, 100],
   },
   {
      id: 2,
      img: ration_2,
      title: 'Для щенков',
      subTitle: 'Индейка/Говядина',
      text: 'Подходит для ежедвеного кормления. Богат животными белками и Омега-3.',
      grams: [700, 500, 300, 150, 100],
   },
   {
      id: 3,
      img: ration_3,
      title: 'Для взрослых собак',
      subTitle: 'Баранина/Кролик',
      text: 'Подходит для ежедвеного кормления. Богат животными белками и Омега-3.',
      grams: [700, 500, 300, 150, 100],
   },
   {
      id: 4,
      img: ration_4,
      title: 'Для щенков',
      subTitle: 'Баранина/Кролик',
      text: 'Подходит для ежедвеного кормления. Богат животными белками и Омега-3.',
      grams: [700, 500, 300, 150, 100],
   },
]
