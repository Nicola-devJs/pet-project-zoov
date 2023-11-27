import { useState, useRef, useEffect } from 'react'

interface refNode {
   current: HTMLDivElement | null
}

const useFirstViewportEntry = (ref: refNode, observerOptions = {}) => {
   const [entered, setEntered] = useState(false)
   const observer = useRef(
      new IntersectionObserver(
         ([entry]) => setEntered(entry.isIntersecting),
         observerOptions
      )
   )

   useEffect(() => {
      const element = ref.current
      const ob = observer.current

      if (entered) {
         ob.disconnect()
         return
      }

      if (element && !entered) {
         ob.observe(element)
      }

      return () => {
         ob.disconnect()
         if (element) element.style.minHeight = 'auto'
      }
   }, [ref, entered])

   return entered
}

export default useFirstViewportEntry
