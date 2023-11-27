import { styled, keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const StyledLoading = styled.div`
   width: 100%;
   height: 100vh;
   background: #f5f5f5;
   position: relative;
   &:after {
      content: '';
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 4px dashed #000;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: ${rotate} 2s linear infinite;
   }
`

export const Skeleton = () => {
   return <StyledLoading />
}
