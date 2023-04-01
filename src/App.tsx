import { Outlet, useLocation, Navigate } from "react-router-dom";
import ShellContainer, {
  ShellDrawerItem,
} from "@components/shell/ShellContainer";
import { useAuthContext } from "@store/AuthContext";

import AppRoutes from "./APP_ROUTES.json";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

const MAIN_NAV_LIST: ShellDrawerItem[] = [
  {
    label: "dashboard",
    Icon: DashboardIcon,
    path: AppRoutes.main.dashboard,
  },
  {
    label: "Inventory",
    Icon: InventoryIcon,
    path: AppRoutes.inventory.main,
  },
];

const BOTTOM_NAV_LIST: ShellDrawerItem[] = [
  {
    label: "settings",
    Icon: SettingsIcon,
    path: AppRoutes.main.settings,
  },
  {
    label: "logout",
    Icon: LogoutIcon,
    path: AppRoutes.main.logout,
  },
];

function App() {
  const { token } = useAuthContext();
  const location = useLocation();

  if (token == null) {
    // protected routes
    return (
      <Navigate to={AppRoutes.main.login} replace state={{ from: location }} />
    );
  }

  return (
    <ShellContainer mainNavList={MAIN_NAV_LIST} bottomNavList={BOTTOM_NAV_LIST}>
      <Outlet />
    </ShellContainer>
  );
}

export default App;
