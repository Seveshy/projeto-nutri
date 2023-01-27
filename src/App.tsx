import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './src/default'
import { GlobalStyle } from './src/global'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>TESTE</h1>
    </ThemeProvider>
  )
}

export default App
