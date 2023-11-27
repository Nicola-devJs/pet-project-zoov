import React, { useState, useContext } from 'react'
import { Link } from 'react-scroll'
import {
   WrapperLink,
   MobileMenu,
   ListMenu,
   StyledOverlay,
   MenuMobileButton,
} from './StyledPreviewMenu'
import { blockScrollPage } from '../../../../helpers/blockedScroll'
import { PreviewLogo } from '../logo/PreviewLogo'
import { ModalValueContext } from '../../../../context/ModalContext'
import { ModalContentRation } from '../../../../components/modalContent/modalContentRation/ModalContentRation'

export const PreviewMenu: React.FunctionComponent = () => {
   const { onModal } = useContext(ModalValueContext)
   const [isActiveMenu, setActiveMenu] = useState<boolean>(false)
   const toggleActiveMenu = () => {
      blockScrollPage(!isActiveMenu)
      setActiveMenu((prev) => !prev)
   }

   const closeMenu = () => {
      blockScrollPage(false)
      setActiveMenu(false)
   }

   const calculateRationHandler = () => {
      onModal(<ModalContentRation />, 'default')
      setActiveMenu(false)
   }

   return (
      <>
         {' '}
         <PreviewLogo onCloseMenu={closeMenu} />
         {isActiveMenu && <StyledOverlay onClick={closeMenu} />}
         <ListMenu as={'ul'} gap={52} active={isActiveMenu}>
            <WrapperLink>
               <Link
                  to="barf"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeMenu}
               >
                  BARF
               </Link>
            </WrapperLink>
            <WrapperLink>
               <Link
                  to="rations"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeMenu}
               >
                  Рационы
               </Link>
            </WrapperLink>
            <WrapperLink>
               <Link
                  to="zooov"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeMenu}
               >
                  ZOOOV
               </Link>
            </WrapperLink>
            <WrapperLink>
               <Link
                  to="about"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeMenu}
               >
                  О нас
               </Link>
            </WrapperLink>
            <WrapperLink>
               <Link
                  to="delivery"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeMenu}
               >
                  Доставка
               </Link>
            </WrapperLink>
            <WrapperLink>
               <Link
                  to="faq"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeMenu}
               >
                  FAQ
               </Link>
            </WrapperLink>
            <WrapperLink>
               <Link
                  to="contacts"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={closeMenu}
               >
                  Контакты
               </Link>
            </WrapperLink>
            <MenuMobileButton onClick={calculateRationHandler}>
               Выбрать рацион
            </MenuMobileButton>
         </ListMenu>
         <MobileMenu active={isActiveMenu} onClick={toggleActiveMenu}>
            <span></span>
         </MobileMenu>
      </>
   )
}
