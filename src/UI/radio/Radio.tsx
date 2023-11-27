import React, { useState } from 'react'
import { StyledRadio, RadioFake, RadioLabel } from './StyledRadio'

interface RadioProps {
   children: string
   name: string
   checked?: boolean
}

export const Radio: React.FC<RadioProps> = ({
   children,
   name,
   checked = false,
}) => {
   const [check, setCheck] = useState(checked)
   function radioHandler() {
      setCheck((prev) => !prev)
   }
   return (
      <StyledRadio as={'label'} align="center">
         <input
            type="radio"
            name={name}
            style={{ display: 'none' }}
            checked={check}
            onChange={radioHandler}
         />
         <RadioFake />
         <RadioLabel as={'span'}>{children}</RadioLabel>
      </StyledRadio>
   )
}
