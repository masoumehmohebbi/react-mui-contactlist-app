import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ThemeProvider, createTheme } from "@mui/material";
import { HashRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ccc",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
