import React, { useState } from 'react'
import { StyledCounter, CounterControl, CounterInput } from './StyledCounter'

export const Counter: React.FC = () => {
   const [count, setCount] = useState<number>(1)

   const increment = () => setCount((prev) => prev + 1)
   const decrement = () => setCount((prev) => prev - 1)

   return (
      <StyledCounter align="center" justify="space-between">
         <CounterControl onClick={increment} count="plus" />
         <CounterInput type="number" readOnly value={count} />
         <CounterControl onClick={decrement} count="minus" />
      </StyledCounter>
   )
}
