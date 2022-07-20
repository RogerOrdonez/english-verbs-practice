import React from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProvider, ThemeProvider } from './shared/context'
import { ThemeToggle } from './features/ThemeToggle'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <ThemeToggle />
      <ChakraProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
