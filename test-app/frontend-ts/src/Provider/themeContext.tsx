import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../Styles/Theme/useDarkMode'
import { lightTheme, darkTheme } from '../Styles/Theme/theme'

const ThemeContext: React.FC = ({ children }) => {
  const { theme } = useDarkMode()

  const themeMode = theme === 'dark' ? darkTheme : lightTheme

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
}

export default ThemeContext
