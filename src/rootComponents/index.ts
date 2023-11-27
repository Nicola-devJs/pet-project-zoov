import { lazy } from 'react'

const Preview = lazy(() => import('../modules/preview/Preview'))
const Barf = lazy(() => import('../modules/barf/Barf'))
const Rations = lazy(() => import('../modules/rations/Rations'))
const Why = lazy(() => import('../modules/why/Why'))
const About = lazy(() => import('../modules/about/About'))
const Delivery = lazy(() => import('../modules/delivery/Delivery'))
const FAQ = lazy(() => import('../modules/faq/FAQ'))
const Footer = lazy(() => import('../modules/footer/Footer'))

export const rootComponents = [
   { id: 'preview', Root: Preview },
   { id: 'barf', Root: Barf },
   { id: 'rations', Root: Rations },
   { id: 'zooov', Root: Why },
   { id: 'about', Root: About },
   { id: 'delivery', Root: Delivery },
   { id: 'faq', Root: FAQ },
   { id: 'contacts', Root: Footer },
]
