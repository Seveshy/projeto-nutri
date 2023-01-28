import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Nutrition } from "./pages/Nutrition";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Nutrition />
    </ThemeProvider>
  );
}

export default App;
