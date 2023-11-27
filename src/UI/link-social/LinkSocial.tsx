import { StyledLinkSocial } from './StyledLinkSocial'
import './assets/style.css'

interface LinkSocialProps {
   children: string
   icon: 'whatsapp' | 'telegram'
   bg?: 'white' | 'default'
}

export const LinkSocial: React.FC<LinkSocialProps> = ({
   children,
   icon,
   bg = 'default',
}) => {
   return (
      <StyledLinkSocial bg={bg} className={`icon-${icon}`}>
         {children}
      </StyledLinkSocial>
   )
}
