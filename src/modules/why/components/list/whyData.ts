import leaf from '../../assets/Leaf.svg'
import heartbeat from '../../assets/heartbeat.svg'
import pawPrint from '../../assets/PawPrint.svg'
import smiley from '../../assets/Smiley.svg'

export interface IWhyItem {
   id: number
   icon: string
   title: string
   text: string
}

export const whyItems: IWhyItem[] = [
   {
      id: 1,
      icon: leaf,
      title: 'Натурально',
      text: 'Все продукты тщательно отбираем у проверенных поставщиков.',
   },
   {
      id: 2,
      icon: heartbeat,
      title: 'Здорово',
      text: 'Система питания, которая продлевает жизнь вашего хвостика.',
   },
   {
      id: 3,
      icon: pawPrint,
      title: 'Сбалансированно',
      text: 'Сделайте заказ на сайте и с вами свяжется  наш менеджер для уточнения деталей.',
   },
   {
      id: 4,
      icon: smiley,
      title: 'Удобно',
      text: 'Достаточно разморозить порцию ZOOOV,  удалить отрывную крышку с лотка и обед для вашего питомца готов.',
   },
]
