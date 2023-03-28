import React, { FunctionComponent } from "react";
import shellConfig from "@components/shell/config";
import { AppBar } from "@mui/material";
import { CustomToolbar } from "./TopNavBar.styles";
import ElevationScroll from "./ElevationScroll";

const DRAWER_WIDTH = shellConfig.DRAWER_WIDTH;

interface TopNavBarProps {
  children: React.ReactNode;
}

const TopNavBar: FunctionComponent<TopNavBarProps> = ({ children }) => {
  return (
    <>
      <ElevationScroll>
        <AppBar
          data-testid="top-app-bar"
          sx={{
            width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
            ml: { sm: `${DRAWER_WIDTH}px` },
          }}
          color={"transparent"}
          elevation={0}
        >
          <CustomToolbar>{children}</CustomToolbar>
        </AppBar>
      </ElevationScroll>
      <CustomToolbar />
    </>
  );
};

export default TopNavBar;
