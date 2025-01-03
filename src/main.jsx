import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './templates/App/index'
import { GlobalStyles } from './styles/globalstyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles></GlobalStyles>
    <Home />
  </StrictMode>,
)
