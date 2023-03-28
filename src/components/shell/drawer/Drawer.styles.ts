import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";
import config from "@components/shell/config";

const DRAWER_WIDTH = config.DRAWER_WIDTH;

export const CustomDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: DRAWER_WIDTH,
  },
}));
