import { useState } from 'react'
import { Flex } from '../../../components/styled/flex/Flex'
import {
   StyledFAQItem,
   FAQItemTitle,
   FAQItemText,
   FAQItemToggler,
} from './StyledFAQItem'
import { IFQAItem } from '../list/FAQData'

interface FAQItemProps {
   faq: IFQAItem
}

export const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
   const [textVisible, setTextVisible] = useState(false)

   function togglerHandler() {
      setTextVisible((prev) => !prev)
   }

   return (
      <StyledFAQItem>
         <Flex align="flex-start" justify="space-between">
            <FAQItemTitle>{faq.title}</FAQItemTitle>
            <FAQItemToggler onClick={togglerHandler} isOpen={textVisible} />
         </Flex>
         <FAQItemText isVisible={textVisible}>{faq.text}</FAQItemText>
      </StyledFAQItem>
   )
}
