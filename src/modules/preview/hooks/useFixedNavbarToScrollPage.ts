import { useState, useEffect } from 'react'

export const useFixedMenuToScrollPage = (
   callback: (param: boolean) => void
) => {
   const [isViewScreen, setViewScreen] = useState<boolean>(false)
   const previewRoot: HTMLDivElement | null = document.querySelector('#preview')
   const fixedMenu = () => {
      if (!previewRoot) {
         return
      }
      if (window.scrollY > previewRoot?.offsetHeight) {
         setViewScreen(true)
      } else {
         setViewScreen(false)
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', fixedMenu)

      callback(isViewScreen)
      return () => {
         window.removeEventListener('scroll', fixedMenu)
      }
   }, [isViewScreen])
}
