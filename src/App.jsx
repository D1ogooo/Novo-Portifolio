import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyle"
import { DarkTheme, LightTheme } from "./styles/theme"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {
 const [theme, setTheme] = useState(LightTheme)
 const handleTheme = () => {
  setTheme(theme === DarkTheme ? LightTheme : DarkTheme)
 }

 return (
  <>
   <ThemeProvider theme={theme}>
    <Header handleTheme={handleTheme} actualTheme={theme} />
    <Home />
    <GlobalStyle />
   </ThemeProvider>
  </>
 )
}

export default App
