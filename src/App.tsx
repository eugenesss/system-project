import { Outlet, useLocation, Navigate } from "react-router-dom";
import ShellContainer from "@components/shell/ShellContainer";
import { useAuthContext } from "@store/AuthContext";

import AppRoutes from "@AppRoutes";

function App() {
  const { token } = useAuthContext();
  const location = useLocation();

  if (token == null) {
    // protected routes
    return (
      <Navigate to={AppRoutes.main.login} replace state={{ from: location }} />
    );
  }

  return (
    <ShellContainer>
      <Outlet />
    </ShellContainer>
  );
}

export default App;
