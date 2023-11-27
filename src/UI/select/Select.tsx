import React, { useState, useEffect } from 'react'
import {
   StyledSelect,
   SelectCurrentOption,
   SelectArrow,
   SelectWrapper,
   SelectListOptions,
   SelectOption,
} from './StyledSelect'

interface SelectProps {
   defaultValue: string
   options: number[]
   prefix?: string
}

export const Select: React.FC<SelectProps> = ({
   defaultValue,
   options,
   prefix = '',
}) => {
   const [selectValue, setSelectValue] = useState<string>(defaultValue)
   const [isDropdown, setDropdown] = useState(false)

   function closeDropdownHandler() {
      setDropdown(false)
   }

   function toggleDropdownHandler() {
      setDropdown((prev) => !prev)
   }

   function selectValueHandler(event: React.MouseEvent<HTMLLIElement>) {
      const newText = event.currentTarget.textContent
      if (newText) {
         setSelectValue(newText)
         closeDropdownHandler()
      }
   }

   useEffect(() => {
      document.addEventListener('click', closeDropdownHandler)

      return () => {
         document.removeEventListener('click', closeDropdownHandler)
      }
   }, [])

   return (
      <StyledSelect onClick={(event) => event.stopPropagation()}>
         <SelectWrapper>
            <SelectCurrentOption
               readOnly
               value={selectValue}
               isSelectOption={defaultValue === selectValue}
            />
            <SelectArrow active={isDropdown} onClick={toggleDropdownHandler} />
         </SelectWrapper>
         <SelectListOptions active={isDropdown}>
            {options.map((value) => (
               <SelectOption key={value} onClick={selectValueHandler}>
                  {value}
                  {prefix}
               </SelectOption>
            ))}
         </SelectListOptions>
      </StyledSelect>
   )
}
