import {
   StyledRationsTop,
   RationsHighlightedWord,
   RationsTopText,
   RationsTopTitle,
} from './StyledRationsTop'
export const RationsTop = () => {
   return (
      <StyledRationsTop>
         <RationsTopTitle>
            Рационы <RationsHighlightedWord>ZOOOV</RationsHighlightedWord>
         </RationsTopTitle>
         <RationsTopText>
            Система питания взрослой собаки не подойдет для щенка, поэтому мы
            создали разные по составу рационы ZOOOV. Вы сможете заказать
            полноценное питание исходя из возраста, веса и даже вкусовых
            предпочтений вашего друга. ZOOOV заботится о каждой собаке.
         </RationsTopText>
      </StyledRationsTop>
   )
}
