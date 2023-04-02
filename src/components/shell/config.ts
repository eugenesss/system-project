import { grey } from "@mui/material/colors";
import { ShellDrawerItem } from "@components/shell/ShellContainer";

import AppRoutes from "@AppRoutes";
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
  {
    label: "Report",
    Icon: InventoryIcon,
    path: AppRoutes.reporting.main,
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

export default {
  DRAWER_WIDTH: 240,
  BACKGROUND_COLOR: grey[100],
  MAIN_NAV_LIST,
  BOTTOM_NAV_LIST,
};
