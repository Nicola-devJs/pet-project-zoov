import { LinkSocial } from '../../../UI/link-social/LinkSocial'
import {
   StyledFooterContacts,
   FooterContactsTitle,
   FooterContactsSubscribe,
   FooterContactsTel,
   FooterContactsText,
   FooterContactsSocials,
} from './StyledFooterContacts'

export const FooterContacts = () => {
   return (
      <StyledFooterContacts>
         <FooterContactsTitle>Контакты</FooterContactsTitle>
         <FooterContactsText>
            Вы всегда можете с нами связаться по телефону или в мессенджерах
         </FooterContactsText>
         <FooterContactsTel as={'a'} href="tel:+7900000-00-00">
            +7 (900)000-00-00
         </FooterContactsTel>
         <FooterContactsSocials>
            <LinkSocial icon="whatsapp" bg="white">
               Написать в WhatsApp
            </LinkSocial>
            <LinkSocial icon="telegram" bg="white">
               Написать в Telegram
            </LinkSocial>
         </FooterContactsSocials>
         <FooterContactsSubscribe>
            Подписывайтесь на наш <a href="#">Instagram</a> и следите за
            новостями
         </FooterContactsSubscribe>
      </StyledFooterContacts>
   )
}
