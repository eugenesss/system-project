import React, { FunctionComponent } from "react";
import AuthContextProvider, { AuthContextProviderProps } from ".";

export interface MockAuthContextProviderProps {
  children: React.ReactElement;
  providerProps?: Partial<AuthContextProviderProps["value"]>;
}

const MockAuthContextProvider: FunctionComponent<
  MockAuthContextProviderProps
> = ({ children, providerProps }) => {
  return (
    <AuthContextProvider value={{ token: "12345", ...providerProps }}>
      {children}
    </AuthContextProvider>
  );
};

export default MockAuthContextProvider;
