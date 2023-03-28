import { FunctionComponent } from "react";
import {
  styled,
  TextField,
  Theme,
  Typography,
  FormControl,
  Button,
} from "@mui/material";
import SpaceDivider from "@components/common/SpaceDivider";
import AppConstants from "@config/app/constants.json";

const LoginSection = styled("section")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const LoginPaper = styled("div")(
  ({ theme }: { theme: Theme }) => `
  padding: ${theme.spacing(6)};
  width: 320px;
  `
);

const LoginPage: FunctionComponent = () => {
  return (
    <LoginSection>
      <LoginPaper>
        <Typography variant="h3" color={"primary"}>
          {AppConstants.appname}
        </Typography>
        <SpaceDivider spacing={4} />
        <Typography variant="h4">Log in</Typography>
        <SpaceDivider spacing={2} />
        <FormControl margin="normal" fullWidth>
          <TextField
            id="username"
            label="Username / Email"
            variant="outlined"
            fullWidth
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
            type={"password"}
          />
        </FormControl>
        <SpaceDivider spacing={2} />
        <Button color="secondary" variant="contained" fullWidth>
          Continue with email
        </Button>
      </LoginPaper>
    </LoginSection>
  );
};

export default LoginPage;
