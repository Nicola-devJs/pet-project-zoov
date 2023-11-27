import packageBox from '../../assets/Package.svg'
import call from '../../assets/PhoneCall.svg'
import clock from '../../assets/Clock.svg'
import heart from '../../assets/heart.svg'

export interface IDeliveryItem {
   id: number
   icon: string
   title: string
   text: string
}

export const DeliveryItems: IDeliveryItem[] = [
   {
      id: 1,
      icon: packageBox,
      title: 'Закажите рацион',
      text: `Выберите рацион для своей собаки. Если не знаете сколько и какой – мы подскажем.`,
   },
   {
      id: 2,
      icon: call,
      title: 'Подтвердите заказ',
      text: 'Мы свяжемся с вами для подтверждения заказа и уточнения деталей.',
   },
   {
      id: 3,
      icon: clock,
      title: 'Ожидайте доставки',
      text: 'Привозим заказ на следующий день. По СПб – 350₽, при заказе от 3 500₽ – бесплатно. Лен. область – по договоренности.',
   },
   {
      id: 4,
      icon: heart,
      title: 'Радуйте своего питомца',
      text: 'Просто разморозьте рацион: при комнатной температуре – 3 часа, в холодильнике – 12-15 часов.',
   },
]
