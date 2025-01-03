import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './templates/App/index'
import { GlobalStyles } from './styles/globalstyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Home />
    </ThemeProvider>



  </StrictMode>
)
