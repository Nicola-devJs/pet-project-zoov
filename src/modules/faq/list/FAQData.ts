export interface IFQAItem {
   id: number
   title: string
   text: string
}

export const FAQData: IFQAItem[] = [
   {
      id: 1,
      title: 'Не опасны ли бактерии, которые находятся в сыром мясе?',
      text: 'У здоровых собак отличная иммунная система, готовая ко всем видам бактерий. Рацион BARF как раз укрепит иммунитет вашей собаки и защитит ее от влияния бактерий, которые находятся на улице или даже в вашем доме.',
   },
   {
      id: 2,
      title: 'Надо ли давать дополнительно витамины к рациону BARF?',
      text: 'Надо',
   },
   {
      id: 3,
      title: 'А если моя собака уже давно питается промышленным кормом и у нее нет проблем со здоровьем?',
      text: 'Это временно',
   },
   {
      id: 4,
      title: 'Можно ли смешивать натуральный корм и корм промышленного производства?',
      text: 'Не рекомендуется',
   },
   {
      id: 5,
      title: 'Могу ли я сам составить для своей собаки рацион по системе BARF?',
      text: 'Конечно',
   },
   {
      id: 6,
      title: 'Присутствует ли в ZOOOV рационах рыба?',
      text: 'Да',
   },
   {
      id: 7,
      title: 'Как перевести питомца на натуральное питание?',
      text: 'Постепенно',
   },
   {
      id: 8,
      title: 'Как готовить рацион ZOOOV?',
      text: 'С душой',
   },
   {
      id: 9,
      title: 'При переходе на рацион ZOOOV у собаки начались проблемы с ЖКТ. Это нормально?',
      text: 'Нет, нужно обратиться к ветеренару',
   },
]