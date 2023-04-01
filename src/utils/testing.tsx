import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import MockAuthContextProvider, {
  MockAuthContextProviderProps,
} from "@store/AuthContext/index.mocks";

/**
 * Custom Render
 */

interface OverrideProviderProps {
  authContext?: MockAuthContextProviderProps["providerProps"];
}

const AllTheProviders = ({
  children,
  overrideProviderProps,
}: {
  children: React.ReactElement;
  overrideProviderProps?: OverrideProviderProps;
}) => {
  const theme: Theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <MockAuthContextProvider
        providerProps={overrideProviderProps?.authContext}
      >
        {children}
      </MockAuthContextProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper"> & {
    overrideProviderProps?: OverrideProviderProps;
  }
) => ({
  user: userEvent.setup(),
  ...render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders overrideProviderProps={options?.overrideProviderProps}>
        {children}
      </AllTheProviders>
    ),
    ...options,
  }),
});

/**
 * Custom Render With Routes
 */
const AllTheProvidersWithRoutes = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <BrowserRouter>
      <AllTheProviders>{children}</AllTheProviders>
    </BrowserRouter>
  );
};

interface RenderWithRouterOptions extends Omit<RenderOptions, "wrapper"> {
  route?: string;
}
const renderWithRouter = (
  ui: ReactElement,
  { route = "/" }: RenderWithRouterOptions = {}
) => {
  window.history.pushState({}, "Test page", route);
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllTheProvidersWithRoutes }),
  };
};

export * from "@testing-library/react";
export { customRender as render, renderWithRouter };
