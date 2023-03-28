import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  createTheme,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from "@mui/material/styles";
import LoginPage from "@pages/login";
import DashboardPage from "@pages/dashboard";
import ErrorPage from "@pages/error";
import InventoryPage from "@pages/inventory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/dashboard", element: <DashboardPage /> },
  {
    path: "/inventory",
    element: <InventoryPage />,
    children: [
      {
        path: ":id",
        element: <InventoryPage />,
        children: [{ path: ":test", element: <InventoryPage /> }],
      },
    ],
  },
]);

function App() {
  const theme: Theme = createTheme({
    palette: {
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
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
