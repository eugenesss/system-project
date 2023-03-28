import React, { FunctionComponent } from "react";
import { CustomDrawer } from "./Drawer.styles";
import type { DrawerProps } from "@mui/material";

export enum DataTestId {
  Drawer = "shelldrawer-mobile",
}

interface ShellDrawerMobileProps {
  openState: boolean;
  onCloseAction: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  drawerProps?: Partial<DrawerProps>;
}

const ShellDrawerMobile: FunctionComponent<ShellDrawerMobileProps> = ({
  openState,
  onCloseAction,
  children,
  drawerProps,
}) => {
  return (
    <CustomDrawer
      data-testid={DataTestId.Drawer}
      variant="temporary"
      open={openState}
      onClose={onCloseAction}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      {...drawerProps}
    >
      {children}
    </CustomDrawer>
  );
};

export default ShellDrawerMobile;
