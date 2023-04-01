import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import AppRoutes from "./APP_ROUTES.json";

import AuthContextProvider from "@store/AuthContext";

// Pages
import App from "./App";
import LoginPage from "@pages/login";
import LogoutPage from "@pages/logout";
import DashboardPage from "@pages/dashboard";
import ErrorPage from "@pages/error";
import InventoryPage from "@pages/inventory";

const WithProviders: FunctionComponent = () => {
  return (
    <AuthContextProvider>
      <Outlet />
    </AuthContextProvider>
  );
};

const Routes: RouteObject[] = [
  {
    element: <WithProviders />,
    children: [
      {
        path: AppRoutes.main.home,
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          { path: AppRoutes.main.dashboard, element: <DashboardPage /> },
          { path: AppRoutes.main.settings, element: <div>settings page</div> },
          {
            path: AppRoutes.inventory.main,
            element: <InventoryPage />,
            children: [
              {
                path: AppRoutes.inventory.create,
                element: <InventoryPage />,
                children: [{ path: ":test", element: <InventoryPage /> }],
              },
            ],
          },
        ],
      },
    ],
  },
  { path: AppRoutes.main.login, element: <LoginPage /> },
  { path: AppRoutes.main.logout, element: <LogoutPage /> },
];

export default Routes;
