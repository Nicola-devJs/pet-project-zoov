import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModalContext } from './context/ModalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <ModalContext>
      <App />
   </ModalContext>
)
