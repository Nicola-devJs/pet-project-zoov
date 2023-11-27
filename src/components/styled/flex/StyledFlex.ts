import { styled } from 'styled-components'

export interface FlexProps {
   className?: string
   direction?: string
   justify?: string
   align?: string
   gap?: number
   children: React.ReactElement | React.ReactNode
   as?: string
}

export const StyledFlex = styled.div<FlexProps>`
   display: flex;
   flex-direction: ${({ direction }) => direction || 'row'};
   justify-content: ${({ justify }) => justify || 'stretch'};
   align-items: ${({ align }) => align || 'stretch'};
   ${({ gap }) => (gap ? `gap: ${gap}px;` : '')}
`
