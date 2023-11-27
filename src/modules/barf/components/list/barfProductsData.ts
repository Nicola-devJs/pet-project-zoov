import meat from '../../assets/icons/meat.svg'
import bone from '../../assets/icons/bone.svg'
import fruits from '../../assets/icons/fruits.svg'
import liver from '../../assets/icons/liver.svg'
import offal from '../../assets/icons/offal.svg'
import seeds from '../../assets/icons/seeds.svg'
import vegetables from '../../assets/icons/vegetables.svg'

export interface IBarfProductForDogs {
   icon: string
   value: string
   percent: number
}

const barfProductsForAdultDogs: IBarfProductForDogs[] = [
   { icon: meat, value: 'Мясо', percent: 70 },
   { icon: bone, value: 'Кости', percent: 10 },
   { icon: vegetables, value: 'Овощи', percent: 7 },
   { icon: liver, value: 'Печень', percent: 5 },
   { icon: offal, value: 'Субпродукты', percent: 5 },
   { icon: seeds, value: 'Семена/орехи', percent: 2 },
   { icon: fruits, value: 'Фрукты', percent: 1 },
]

const barfProductsForPuppies: IBarfProductForDogs[] = [
   { icon: meat, value: 'Мясо', percent: 58 },
   { icon: bone, value: 'Кости', percent: 17 },
   { icon: vegetables, value: 'Овощи', percent: 7 },
   { icon: liver, value: 'Печень', percent: 7 },
   { icon: offal, value: 'Субпродукты', percent: 7 },
   { icon: seeds, value: 'Семена/орехи', percent: 3 },
   { icon: fruits, value: 'Фрукты', percent: 1 },
]

export default [
   { title: 'для взрослых', list: barfProductsForAdultDogs },
   { title: 'для щенков', list: barfProductsForPuppies },
]
