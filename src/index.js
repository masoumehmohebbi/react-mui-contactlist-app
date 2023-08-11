import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ccc",
    },
  },
});
const jsonServer = require("json-server");
const db = require("../server-api/db.json");

jsonServer.createServer(db).listen(3031, () => {
  console.log("JSON server started on port 3031");
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
