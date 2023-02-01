import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { NutritionProvider } from "./context/NutritionContext";
import { Nutrition } from "./pages/Nutrition";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <NutritionProvider>
        <Nutrition />
      </NutritionProvider>
    </ThemeProvider>
  );
}

export default App;
