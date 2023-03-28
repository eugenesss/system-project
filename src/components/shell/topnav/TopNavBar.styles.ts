import shellConfig from "@components/shell/config";
import { Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomToolbar = styled(Toolbar)(
  ({ theme }) => `
  height: ${theme.spacing(14)};
  background: ${shellConfig.BACKGROUND_COLOR};
  padding: ${theme.spacing(1, 3)};
  @media (min-width: 600px) {
    padding: ${theme.spacing(2, 6)};
  }
`
);
