import React, { FunctionComponent } from "react";

import { LocalStorageService, LocalStorageKeys } from "@services/LocalStorage";

type AuthContextValue = {
  token: string | null;
};

export const AuthContext = React.createContext<AuthContextValue>(
  {} as AuthContextValue
);

export interface AuthContextProviderProps {
  children: React.ReactElement;
  value?: AuthContextValue;
}

const AuthContextProvider: FunctionComponent<AuthContextProviderProps> = ({
  children,
  value,
}) => {
  return (
    <AuthContext.Provider
      value={{
        token: LocalStorageService.getLS(LocalStorageKeys.Token),
        ...value,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = (): AuthContextValue => {
  const authContext = React.useContext(AuthContext);
  return authContext;
};
