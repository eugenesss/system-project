import { FunctionComponent } from "react";
import { CustomDrawer } from "./Drawer.styles";
import type { DrawerProps } from "@mui/material";

export enum DataTestId {
  Drawer = "shelldrawer-desktop",
}

interface ShellDrawerDesktopProps {
  drawerProps?: Partial<DrawerProps>;
  children: React.ReactNode;
}

const ShellDrawerDesktop: FunctionComponent<ShellDrawerDesktopProps> = ({
  children,
  drawerProps,
}) => {
  return (
    <CustomDrawer
      data-testid={DataTestId.Drawer}
      variant="permanent"
      open
      {...drawerProps}
    >
      {children}
    </CustomDrawer>
  );
};

export default ShellDrawerDesktop;
