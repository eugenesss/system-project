import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  createTheme,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from "@mui/material/styles";

import Routes from "./RoutesList";

const theme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4557b1",
    },
    secondary: {
      main: "#FFB74D",
    },
  },
  typography: {
    h1: {
      fontSize: "3.4rem",
    },
    h2: {
      fontSize: "2.8rem",
    },
    h3: {
      fontSize: "2.4rem",
    },
    h4: {
      fontSize: "1.8rem",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RouterProvider router={createBrowserRouter(Routes)} />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
