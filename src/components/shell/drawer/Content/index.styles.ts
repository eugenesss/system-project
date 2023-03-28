import { styled } from "@mui/material/styles";
import { Typography, List, Box } from "@mui/material";

export const NavListTitleText = styled(Typography)(
  ({ theme }) => `
color: ${theme.palette.grey[500]};
text-transform: uppercase;
letter-spacing: 2px;
font-size: 12px;
`
);

export const MainMenuList = styled(List)(
  ({ theme }) => `
  li:not(:first-of-type){
    margin-top: ${theme.spacing(3)}
  }
`
);

export const BottomMenuList = styled(List)(
  ({ theme }) => `
  li:not(:first-of-type){
    margin-top: ${theme.spacing(1)}
  }
`
);

export enum DataTestId {
  Wrapper = "dc-wrapper",
  MainNavList = "dc-main-nav-list",
  BottomNavList = "dc-bottom-nav-list",
}

export const DrawerWrapper = styled(Box)(
  ({ theme }) => `
  padding: ${theme.spacing(4, 3)};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
);
