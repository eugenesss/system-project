import React, { ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

/**
 * Custom Render
 */
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const theme: Theme = createTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => ({
  user: userEvent.setup(),
  ...render(ui, { wrapper: AllTheProviders, ...options }),
});

/**
 * Custom Render With Routes
 */
const AllTheProvidersWithRoutes = ({
  children,
}: {
  children: React.ReactNode;
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
export { customRender as render, renderWithRouter, AllTheProvidersWithRoutes };
