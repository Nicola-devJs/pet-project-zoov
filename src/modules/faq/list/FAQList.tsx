import { StyledFAQList } from './StyledFAQList'
import { FAQItem } from '../item/FAQItem'
import { FAQData } from './FAQData'
export const FAQList = () => {
   return (
      <StyledFAQList>
         {FAQData.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
         ))}
      </StyledFAQList>
   )
}
