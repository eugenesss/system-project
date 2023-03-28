import { ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

export const NavListItemText = styled(ListItemText)`
  text-transform: capitalize;
`;

export const NavListItemButton = styled(ListItemButton)(
  ({ theme }) => `
  padding: ${theme.spacing(1)};
  display: flex;
  gap: ${theme.spacing(2)};
  align-items: center;
  `
);

interface CustomLinkProps extends NavLinkProps {
  isActive: boolean;
}

export const CustomLink = styled(NavLink, {
  shouldForwardProp: (props: string) => props !== "isActive",
})<CustomLinkProps>(({ theme, isActive }) => ({
  color: isActive ? theme.palette.grey[800] : theme.palette.grey[500],
  textDecoration: "none",
  width: "100%",
}));
