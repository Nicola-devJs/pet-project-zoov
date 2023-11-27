import { styled } from 'styled-components'

export interface TitleProps {
   children: React.ReactElement | React.ReactNode
   color?: string
   as?: string
}

export const StyledTitle = styled.h2<TitleProps>`
   position: relative;
   z-index: 2;
   color: ${(props) => props.color || props.theme.colors.black};
   font-family: ${(props) => props.theme.fonst.oswald};
   font-size: ${(props) => props.theme.fontSize.title}px;
   font-weight: 700;
   line-height: 130%;
   letter-spacing: 0.92px;

   ${(props) => `@media(max-width: ${props.theme.media.tablet}) {
      font-size: ${props.theme.fontSize.title - 3}px;
      letter-spacing: 0.85px;
   }`}

   ${(props) => `@media(max-width: ${props.theme.media.phone}) {
      font-size: ${props.theme.fontSize.title - 6}px;
      letter-spacing: 0.8px;
   }`}
`
