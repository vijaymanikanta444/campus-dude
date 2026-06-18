import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { MsalProvider } from "@azure/msal-react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import "./index.css";
import App from "./App.jsx";
import { msalInstance } from "./authConfig.js";
import { muiTheme, styledTheme } from "./theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <MuiThemeProvider theme={muiTheme}>
          <StyledThemeProvider theme={styledTheme}>
            <CssBaseline />
            <App />
          </StyledThemeProvider>
        </MuiThemeProvider>
      </BrowserRouter>
    </MsalProvider>
  </StrictMode>,
);
