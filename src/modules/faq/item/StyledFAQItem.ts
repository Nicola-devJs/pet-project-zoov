import { css, styled } from 'styled-components'
import { StyledText } from '../../../components/styled/text/StyledText'

export const StyledFAQItem = styled.li`
   padding-bottom: 32px;
   border-bottom: 1px solid #e5e5e5;
   &:not(:last-child) {
      margin: 0px 0px 32px 0px;
   }
`
export const FAQItemTitle = styled(StyledText)`
   font-size: 18px;
   line-height: 140%;
   color: ${(props) => props.theme.colors.black};
   font-weight: 600;
   margin: 0px 32px 0px 0px;

   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      font-size: 16px;
   }`}
`
export const FAQItemText = styled(StyledText)<{ isVisible: boolean }>`
   transition: all 0.2s ease-in-out;
   line-height: 0%;
   opacity: 0;
   margin-top: 0px;
   visibility: hidden;
   ${(props) =>
      props.isVisible &&
      css`
         line-height: 140%;
         opacity: 1;
         visibility: visible;
         margin-top: 12px;
      `}

   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      font-size: 14px;
   }`}
`
export const FAQItemToggler = styled.div<{ isOpen: boolean }>`
   position: relative;
   width: 20px;
   height: 20px;
   cursor: pointer;

   &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 20px;
      height: 2px;
      background: ${(props) => props.theme.colors.red};
      transform: translate(-50%, -50%) rotate(90deg);
      transition: all 0.2s ease;
      ${(props) =>
         props.isOpen &&
         css`
            transform: translate(-50%, -50%) rotate(0deg);
         `}
   }
   &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 20px;
      height: 2px;
      background: ${(props) => props.theme.colors.red};
      transform: translate(-50%, -50%) rotate(0deg);
   }
`
