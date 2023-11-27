import { useState } from 'react'
import { StyledInput, InputContainer, InputLabel } from './StyledInput'

enum patterns {
   text = '[a-zA-Z0-9{s}]+',
   email = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
   number = '[0-9]',
}

interface InputProps {
   type?: 'input' | 'textarea'
   label: string
   pattern: 'text' | 'number' | 'email'
   outlined?: boolean
   height?: number | 'auto'
   margin?: string
}

export const Input: React.FC<InputProps> = ({
   type = 'input',
   label,
   pattern = 'text',
   outlined,
   height = 48,
   margin,
}) => {
   const [inputValue, setInputValue] = useState('')

   function changeInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
      setInputValue(event.target.value)
   }

   return (
      <InputContainer height={height} margin={margin} className={type}>
         <StyledInput
            as={type}
            type={pattern}
            pattern={patterns[pattern]}
            outlined={outlined}
            required
            value={inputValue}
            onChange={changeInputHandler}
         />
         <InputLabel outlined={outlined}>{label}</InputLabel>
      </InputContainer>
   )
}
