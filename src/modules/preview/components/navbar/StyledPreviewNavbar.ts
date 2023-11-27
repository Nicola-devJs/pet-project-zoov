import { styled } from 'styled-components'
import { StyledFlex } from '../../../../components/styled/flex/StyledFlex'
import { ListMenu, MobileMenu } from '../menu/StyledPreviewMenu'
import { StyledPreviewLogo } from '../logo/StyledPreviewLogo'

export const NavbarFixed = styled(StyledFlex)`
   max-width: 1250px;
   margin: 0 auto;
`

export const StyledPreviewNavbar = styled.div`
   padding-top: 16px;
   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      padding-top: 10px;
   }`}

   &.header_fixed {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      background: ${(props) => props.theme.colors.white};
      height: 80px;
      padding: 9px 25px;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);

      ${ListMenu} li a {
         color: ${(props) => props.theme.colors.black};
         &.active:after {
            transform: translateY(2px);
            visibility: visible;
            opacity: 1;
         }
      }

      ${StyledPreviewLogo} {
         width: 62px;
         height: 62px;
      }

      ${(props) => `@media(max-width: ${props.theme.media.notebook}) {
         
         ${MobileMenu} {
            align-self: center;
            margin-top: 0px;
            span {
               background: ${props.theme.colors.black};
               &::before {
                  background: ${props.theme.colors.black};
               }
               &::after {
                  background: ${props.theme.colors.black};
               }
            }
         }
         }`}
      ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
         height: 62px;
         padding: 10px 25px;
         ${StyledPreviewLogo} {
            width: 48px;
            height: 48px;
         }
      }`}

      ${(props) => `@media(max-width: ${props.theme.media.phone}) {
         height: 58px;
         ${StyledPreviewLogo} {
            width: 40px;
            height: 40px;
         }
         
      }`}
   }
`
