import React, { useState, useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { ruRU } from '@mui/material/locale'
import { ruRU as ruRUDataGrid } from '@mui/x-data-grid'
import { getParams, setParam } from 'helpers/localStorageHelper'
import { PaletteMode } from '@mui/material'

export const ThemeModeContext = React.createContext({ toogleColorMode: () => {} })

type ThemeContextProps = {
  children: React.ReactNode
}

function ThemeContext(props: ThemeContextProps) {
  const [mode, setMode] = useState<PaletteMode>(getParams('config.appbar', 'light', 'theme'))
  const colorMode = useMemo(
    () => ({
      toogleColorMode: () => {
        setMode((prevMode) => {
          let mode: PaletteMode = prevMode === 'light' ? 'dark' : 'light'
          setParam('config.appbar', 'theme', mode)
          return mode
        })
      },
    }),
    [],
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      },
      ruRUDataGrid,
      ruRU,
      ),
    [mode],
  )

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default ThemeContext
