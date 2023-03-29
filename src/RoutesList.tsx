import type { RouteObject } from "react-router-dom";
import AppRoutes from "./APP_ROUTES.json";

// Pages
import App from "./App";
import LoginPage from "@pages/login";
import DashboardPage from "@pages/dashboard";
import ErrorPage from "@pages/error";
import InventoryPage from "@pages/inventory";

const Routes: RouteObject[] = [
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
  { path: AppRoutes.main.login, element: <LoginPage /> },
  { path: AppRoutes.main.logout, element: <div>logout</div> },
];

export default Routes;
