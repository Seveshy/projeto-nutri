import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Nutrition } from './pages/Nutrition'
import { defaultTheme } from './src/default'
import { GlobalStyle } from './src/global'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Nutrition />
    </ThemeProvider>
  )
}

export default App
