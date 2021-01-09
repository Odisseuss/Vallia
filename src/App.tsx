import * as React from "react";
import { ThemeProvider } from "theme-ui";
import "./App.css";
import Button from "./components/inputs/Button";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Button</Button>
    </ThemeProvider>
  );
}

export default App;
