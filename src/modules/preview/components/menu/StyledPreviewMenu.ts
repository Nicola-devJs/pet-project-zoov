import { styled } from 'styled-components'
import { StyledFlex } from '../../../../components/styled/flex/StyledFlex'
import { StyledButton } from '../../../../UI/button/StyledButton'

export const ListMenu = styled(StyledFlex)<{ active?: boolean }>`
   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      position: fixed;
      right: 0;
      top: 0;
      z-index: 10;
      background: ${props.theme.colors.white};
      height: 100%;
      overflow: auto;
      width: 350px;
      padding: 122px 0px 22px;
      flex-direction: column;
      gap: 40px;
      align-items: center;
      transform: translateX(500px);
      transition: all .2s ease-in-out;

      & li a {
         color: ${props.theme.colors.black};
         font-size: 24px;
         font-weight: 600;
      }

      ${
         props.active &&
         `
         transform: translateX(0px);
         `
      }

      
   }`}
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      width: 100%;
   }`}
`

export const StyledOverlay = styled.div`
   position: fixed;
   right: 350px;
   bottom: 0;
   top: 0;
   left: 0;
   z-index: 5;
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      display: none;
   }`}
`

export const WrapperLink = styled.li`
   & a {
      font-weight: 500;
      line-height: 140%;
      color: ${(props) => props.theme.colors.white};
      text-decoration: none;
      cursor: pointer;

      &::after {
         content: '';
         display: block;
         height: 2px;
         background-color: ${(props) => props.theme.colors.red};
         transform: translateY(12px);
         visibility: hidden;
         opacity: 0;
         transition: all 0.2s ease-in-out;
      }
   }

   &:hover a::after {
      transform: translateY(2px);
      visibility: visible;
      opacity: 1;
   }
`

export const MobileMenu = styled.div<{ active?: boolean }>`
   display: none;
   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      align-self: flex-start;
      margin-top: 10px;
      width: 31px;
      height: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      z-index: 12;
      cursor: pointer;

      & span {
         width: 100%;
         height: 2px;
         border-radius: 1px;
         background: ${props.theme.colors.white};
         transition: all .2s ease;

         &::before {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            border-radius: 1px;
            background: ${props.theme.colors.white};
            position: absolute;
            top: 0;
            left: 0;
         }

         &::after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            border-radius: 1px;
            background: ${props.theme.colors.white};
            position: absolute;
            bottom: 0;
            left: 0;
         }
      }
      ${
         props.active &&
         `
         & span {
            transform: rotate(45deg);
            background: ${props.theme.colors.black};

            &::before {
               transform: rotate(90deg);
               background: ${props.theme.colors.black};
            }

            &::after {
               opacity: 0;
            }
         }
      `
      }
   }`}
`
export const MenuMobileButton = styled(StyledButton)<{ active: boolean }>`
   display: none;
   ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
      margin-top: 62px;
      display: block;
   }`}
`
