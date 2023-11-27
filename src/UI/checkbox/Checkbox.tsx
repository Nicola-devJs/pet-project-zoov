import React, { useState } from 'react'
import { CheckboxFake, CheckboxText, CheckboxContainer } from './StyledCheckbox'
interface CheckboxProps {
   label: string
   outlined?: boolean
   id: string
   checked?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({
   label,
   outlined,
   id,
   checked = true,
}) => {
   const [check, setCheck] = useState<boolean>(checked)
   function changeCheckHandler() {
      setCheck((prev) => !prev)
   }
   return (
      <CheckboxContainer as={'label'} htmlFor={id} outlined={outlined}>
         <input
            id={id}
            type="checkbox"
            style={{ display: 'none' }}
            checked={check}
            onChange={changeCheckHandler}
         />
         <CheckboxFake outlined={outlined}></CheckboxFake>
         <CheckboxText outlined={outlined}>{label}</CheckboxText>
      </CheckboxContainer>
   )
}
