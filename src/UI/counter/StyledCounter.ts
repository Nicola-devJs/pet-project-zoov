import { styled } from 'styled-components'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'
import plus from './assets/Plus.svg'
import minus from './assets/Minus.svg'

type count = 'minus' | 'plus'

export const StyledCounter = styled(StyledFlex)`
   height: 48px;
   background: #f4f5f5;
   width: 135px;
   padding: 14px 16px;
   border-radius: 8px;
`
export const CounterControl = styled.span<{ count: count }>`
   flex: 0 0 14px;
   height: 14px;
   font-size: 14px;
   background: url(${(props) => (props.count === 'plus' ? plus : minus)})
      no-repeat;
   cursor: pointer;
`

export const CounterInput = styled.input`
   height: 100%;
   width: 100%;
   font-size: 14px;
   line-height: 140%;
   font-family: Montserrat;
   font-weight: 400;
   color: rgba(0, 0, 0, 0.5);
   text-align: center;
   background: transparent;
   border: none;
   pointer-events: none;

   &[type='number']::-webkit-outer-spin-button,
   &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
   }

   &[type='number'],
   &[type='number']:hover,
   &[type='number']:focus {
      appearance: none;
      -moz-appearance: textfield;
   }

   &:focus {
      outline: none;
   }
`
