import React, { FunctionComponent } from "react";
import { LocalStorageService, LocalStorageKeys } from "@services/LocalStorage";
import { useNavigate } from "react-router-dom";
import AppRoutes from "@AppRoutes";

const Logout: FunctionComponent = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    LocalStorageService.removeLS(LocalStorageKeys.Token);
    navigate(AppRoutes.main.login);
  }, [navigate]);

  return (
    <div>
      <p>page to handle logout</p>
    </div>
  );
};

export default Logout;
