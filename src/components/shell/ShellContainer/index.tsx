import React, { FunctionComponent } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { SvgIconComponent } from "@mui/icons-material";

import { MainBox, MainContentBox, PageTitle } from "./index.styles";

import DrawerMobile from "@components/shell/Drawer/Drawer.mobile";
import DrawerDesktop from "@components/shell/Drawer/Drawer.desktop";
import DrawerContent from "@components/shell/Drawer/Content";

import ShellConfig from "@components/shell/config";
import TopNavBar from "@components/shell/TopNav/TopNavBar";

import { useCurrentPath } from "@utils/useCurrentPath";
import getPageTitle from "./view-models/getPageTitle";
import getNavListItems from "./view-models/getNavListItems";

const DRAWER_WIDTH = ShellConfig.DRAWER_WIDTH;

export enum DataTestId {
  MobileDrawer = "shell-mobile-drawer",
  DesktopDrawer = "shell-desktop-drawer",
  Content = "shell-drawer-content",
  MobileDrawerOpenBtn = "shell-mobile-drawer-open-btn",
}

export interface ShellDrawerItem {
  label: string;
  Icon: SvgIconComponent;
  path: string;
}

interface ShellContainerProps {
  mainNavList: ShellDrawerItem[];
  bottomNavList: ShellDrawerItem[];
  children: React.ReactNode;
}

const ShellContainer: FunctionComponent<ShellContainerProps> = ({
  mainNavList,
  bottomNavList,
  children,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const curRoute = useCurrentPath();
  const pageTitle = React.useMemo(
    () =>
      getPageTitle({ navItems: [...mainNavList, ...bottomNavList], curRoute }),
    [bottomNavList, curRoute, mainNavList]
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // convert ShellDrawerItem to NavListItemProps
  const { mainMenuList, bottomMenuList } = React.useMemo(
    () =>
      getNavListItems(curRoute)({
        mainMenuRouteList: mainNavList,
        bottomMenuRouteList: bottomNavList,
      }),
    [bottomNavList, curRoute, mainNavList]
  );

  const drawerContent = React.useMemo(
    () => (
      <DrawerContent
        data-testid={DataTestId.Content}
        logo={
          <Typography variant="h6" color={"primary"}>
            System Project
          </Typography>
        }
        mainNavList={mainMenuList}
        bottomNavList={bottomMenuList}
      />
    ),
    [bottomMenuList, mainMenuList]
  );

  return (
    <MainBox>
      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
      >
        {matches ? (
          <DrawerDesktop
            data-testid={DataTestId.DesktopDrawer}
            drawerProps={{
              sx: {
                display: { xs: "none", sm: "block" },
              },
            }}
          >
            {drawerContent}
          </DrawerDesktop>
        ) : (
          <DrawerMobile
            data-testid={DataTestId.MobileDrawer}
            openState={mobileOpen}
            onCloseAction={handleDrawerToggle}
            drawerProps={{
              sx: {
                display: { xs: "block", sm: "none" },
              },
            }}
          >
            {drawerContent}
          </DrawerMobile>
        )}
      </Box>

      <MainContentBox
        component="main"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <TopNavBar>
          <IconButton
            data-testid={DataTestId.MobileDrawerOpenBtn}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <PageTitle variant="h3">{pageTitle}</PageTitle>
        </TopNavBar>
        {children}
      </MainContentBox>
    </MainBox>
  );
};

export default ShellContainer;
