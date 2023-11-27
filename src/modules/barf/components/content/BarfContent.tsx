import React from 'react'
import {
   StyledBarfContent,
   BarfText,
   BarfTitle,
   BarfTitleList,
   BarfList,
} from './StyledBarfContent'

export const BarfContent: React.FC = () => {
   return (
      <StyledBarfContent>
         <BarfTitle>Что такое BARF</BarfTitle>
         <BarfText>
            BARF (Biologically Appropriate Raw Food) — система питания собак,
            основанная на сырых натуральных продуктах. Такой рацион максимально
            приближен к естественному пищевому поведению хищников, а значит
            биологически правилен.{' '}
         </BarfText>
         <BarfTitleList>
            После перехода на питание по системе BARF у собак:
         </BarfTitleList>
         <BarfList>
            <li>Нормализуется пищеварение</li>
            <li>Проходят аллергические реакции</li>
            <li>Прекращается образование зубного камня</li>
            <li>Появляется больше энергии</li>
            <li>Увеличивается продолжительность жизни</li>
         </BarfList>
      </StyledBarfContent>
   )
}
