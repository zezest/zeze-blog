import React, { createContext, useState, useEffect } from 'react'
import { object } from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from 'utils/theme'

const defaultState = {
  isDark: false,
  toggleDark: () => {},
}

const ThemeManagerContext = createContext(defaultState)

const defaultOptions = {
  isDark: false,
}

const ThemeManagerProvider = ({ 
  children, options,
}) => {
  const [isDark, setIsDark] = useState(null)

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem('dark')
    const latestTheme = localStorageTheme && JSON.parse(localStorageTheme)

    if (latestTheme !== null) {
      setIsDark(latestTheme)

    } else {
      const newOptions = Object.assign({}, defaultOptions, options)
      setIsDark(newOptions.isDark)
    }
  }, [])

  const toggleDark = () => {
    const toggledTheme = !isDark
    setIsDark(toggledTheme)
    window.localStorage.setItem('dark', JSON.stringify(toggledTheme))
  }

  const currentTheme = isDark ? darkTheme : lightTheme
  const theme = { ...currentTheme, isDark }

  if (isDark === null) return null

  return (
    <ThemeManagerContext.Provider value={[isDark, toggleDark]}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeManagerContext.Provider>
  )
}

ThemeManagerProvider.defaultProps = {
  options: {},
}

ThemeManagerProvider.propTypes = {
  options: object,
}

export {
  ThemeManagerProvider,
  ThemeManagerContext,
}