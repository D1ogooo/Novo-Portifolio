import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  scroll-behavior: smooth;
 }

 body {
  background-color: ${({ theme }) => theme.colors.background};
 }

::-webkit-scrollbar {
  width: 4px;
  transition: 0.3s all;
}

::-webkit-scrollbar-track {
  background-color: #2c2c31;
}

::-webkit-scrollbar-thumb {
  background-color: #bf0293;
  border-radius: 10px;
}
`
