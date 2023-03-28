import { FunctionComponent } from "react";
import type { SvgIconComponent } from "@mui/icons-material";
import { ListItem } from "@mui/material";
import { NavListItemText, NavListItemButton, CustomLink } from "./index.styles";

export enum DataTestId {
  Item = "nav-list-item",
  Link = "nav-list-link",
}

export interface NavListItemProps {
  label: string;
  Icon: SvgIconComponent;
  path: string;
  isActive: boolean;
}

const NavListItem: FunctionComponent<NavListItemProps> = ({
  label,
  Icon,
  path,
  isActive,
}) => {
  return (
    <ListItem data-testid={DataTestId.Item} disablePadding>
      <CustomLink data-testid={DataTestId.Link} to={path} isActive={isActive}>
        <NavListItemButton alignItems="flex-start" selected={isActive}>
          <Icon />
          <NavListItemText primary={label} />
        </NavListItemButton>
      </CustomLink>
    </ListItem>
  );
};

export default NavListItem;
