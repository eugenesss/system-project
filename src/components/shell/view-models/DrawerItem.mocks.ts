import { ShellDrawerItem } from "./types";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const ShellDrawerItemMock: ShellDrawerItem = {
  label: "test",
  Icon: DashboardIcon,
  path: "/test",
};

export const makeShellDrawerItemMock = (
  override?: Partial<ShellDrawerItem>
): ShellDrawerItem => {
  return { label: "label", Icon: DashboardIcon, path: "/test", ...override };
};
