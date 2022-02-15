import React from 'react'
import AppProvider from 'Provider'
import MyRoutes from 'Routes'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'Styles/Theme/theme'
import { useDarkMode } from 'Styles/Theme/useDarkMode'
import { GlobalStyles } from 'Global/globalStyles'

import Toggle from 'Styles/Theme/toggler'

function App() {
  let [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <div className='App'>
        <GlobalStyles />
        <AppProvider>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <MyRoutes />
        </AppProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
