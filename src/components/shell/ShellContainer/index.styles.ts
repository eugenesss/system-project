import { styled } from "@mui/material/styles";
import shellConfig from "@components/shell/config";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const MainBox = styled(Box)(
  () => `
  display: flex;
  min-height: 100vh;
  background: ${shellConfig.BACKGROUND_COLOR};
  `
);

export const MainContentBox = styled(Box)(
  ({ theme }) => `
  flex-grow: 1;
  padding: ${theme.spacing(1, 3)};
  @media (min-width: 600px) {
    padding: ${theme.spacing(2, 6)};
  }
`
);

export const PageTitle = styled(Typography)(
  ({ theme }) => `
  text-transform: capitalize;
  font-weight: ${theme.typography.fontWeightMedium}
`
);
