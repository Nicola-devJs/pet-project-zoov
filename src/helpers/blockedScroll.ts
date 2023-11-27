export const blockScrollPage = (isBlocked: boolean, delay = 200) => {
   const widthScrollbar =
      window.innerWidth - document.documentElement.clientWidth
   const app: HTMLDListElement | null = document.querySelector('#root')
   const headerFixed: HTMLDListElement | null =
      document.querySelector('.header_fixed')
   if (app) {
      const stylesApp = window.getComputedStyle(app)
      const pr =
         +stylesApp.padding.slice(0, stylesApp.padding.length - 2) +
         widthScrollbar
      if (isBlocked) {
         document.body.classList.add('hidden')
         app.style.paddingRight = pr + 'px'

         headerFixed ? (headerFixed.style.paddingRight = 25 + pr + 'px') : null
      } else {
         setTimeout(() => {
            app.style.paddingRight = '0px'
            headerFixed ? (headerFixed.style.paddingRight = '25px') : null
            document.body.classList.remove('hidden')
         }, delay)
      }
   }
}
