import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { MainBox, MainContentBox, PageTitle } from "./ShellContainer.styles";

import DrawerMobile from "@components/shell/drawer/Drawer.mobile";
import DrawerDesktop from "@components/shell/drawer/Drawer.desktop";
import DrawerContent from "@components/shell/drawer/Content";

import shellConfig from "@components/shell/config";
import TopNavBar from "@components/shell/topnav/TopNavBar";
import { ShellDrawerItem } from "./view-models/types";

import { useCurrentPath } from "@utils/useCurrentPath";
import getPageTitle from "@components/shell/view-models/getPageTitle";
import getNavListItems from "@components/shell/view-models/getNavListItems";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const DRAWER_WIDTH = shellConfig.DRAWER_WIDTH;

export enum DataTestId {
  MobileDrawer = "shell-mobile-drawer",
  DesktopDrawer = "shell-desktop-drawer",
  Content = "shell-drawer-content",
  MobileDrawerOpenBtn = "shell-mobile-drawer-open-btn",
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
    () => getPageTitle({ navItems: mainNavList, curRoute }),
    [curRoute, mainNavList]
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
