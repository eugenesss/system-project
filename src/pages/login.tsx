import React, { FunctionComponent } from "react";
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

import { AuthenticationService } from "@services/ShellServices/Authentication";
import { useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "@AppRoutes";

const LoginSection = styled("section")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const LoginPaper = styled("form")(
  ({ theme }: { theme: Theme }) => `
  padding: ${theme.spacing(6)};
  width: 320px;
  `
);

const LoginPage: FunctionComponent = () => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await AuthenticationService.login({ username, password });

    const origin = location.state?.from?.pathname || AppRoutes.main.dashboard;
    navigate(origin);
  };

  return (
    <LoginSection>
      <LoginPaper onSubmit={handleLogin}>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <SpaceDivider spacing={2} />
        <Button color="secondary" variant="contained" fullWidth type="submit">
          Continue with email
        </Button>
      </LoginPaper>
    </LoginSection>
  );
};

export default LoginPage;
