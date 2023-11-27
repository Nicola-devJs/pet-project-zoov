import { styled } from 'styled-components'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'
import arrow from './assets/arrow.svg'

interface StyledSelectProps {
   active: boolean
}

export const StyledSelect = styled.div`
   width: 205px;
   height: 48px;
   position: relative;
`

export const SelectWrapper = styled(StyledFlex)`
   width: 100%;
   height: inherit;
   position: relative;
`

export const SelectCurrentOption = styled.input<{ isSelectOption: boolean }>`
   width: 100%;
   height: 100%;
   border-radius: 8px;
   padding: 14px 33px 14px 16px;
   color: ${(props) => (!props.isSelectOption ? '#000' : 'rgba(0, 0, 0, 0.5)')};
   font-size: 14px;
   line-height: 140%;
   font-family: Montserrat;
   font-weight: 400;
   border: none;
   background: #f4f5f5;

   &:focus {
      outline: none;
   }
`

export const SelectArrow = styled.span<StyledSelectProps>`
   position: absolute;
   top: 18px;
   right: 16px;
   background: url(${arrow}) no-repeat;
   background-position: center;
   width: 14px;
   height: 14px;
   cursor: pointer;
   transform: rotate(0deg);
   transition: transform 0.2s ease;

   ${(props) => props.active && `transform: rotate(180deg);`}
`

export const SelectListOptions = styled.ul<StyledSelectProps>`
   width: 100%;
   position: absolute;
   top: 57px;
   left: 0;
   right: 0;
   z-index: 10;
   padding: 8px 0px;
   border-radius: 8px;
   background: #f4f5f5;
   transform-origin: top;
   transform: scale(0);
   transition: transform 0.2s ease;

   ${(props) => props.active && `transform: scale(1);`}
`
export const SelectOption = styled.li`
   width: 100%;
   height: 36px;
   padding: 8px 16px;
   background: transparent;
   transition: background 0.2s ease-in-out;
   cursor: pointer;

   &:hover {
      background: #e5e5e5;
   }
`
