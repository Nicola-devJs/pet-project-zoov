import { styled } from 'styled-components'

export interface TextProps {
   children: React.ReactElement | React.ReactNode
   color?: string
   as?: string
}

export const StyledText = styled.p<TextProps>`
   color: ${(props) => props.color || props.theme.colors.gray};
   font-size: ${(props) => props.theme.fontSize.text}px;
   font-weight: 400;
   line-height: 130%;
`
