import React from 'react'
import { Link } from 'react-scroll'
import { StyledPreviewLogo } from './StyledPreviewLogo'
import imgLogo from '../../assets/logo.png'

export interface PreviewLogoProps {
   size?: number
   onCloseMenu: () => void
}

export const PreviewLogo: React.FC<PreviewLogoProps> = ({
   size = 80,
   onCloseMenu,
}) => {
   return (
      <Link
         to="preview"
         spy={true}
         smooth={true}
         offset={0}
         duration={500}
         style={{ cursor: 'pointer' }}
         onClick={onCloseMenu}
      >
         <StyledPreviewLogo size={size} src={imgLogo}></StyledPreviewLogo>
      </Link>
   )
}
