import { renderHook } from "@utils/testing";
import { useCurrentPath } from "./useCurrentPath";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("useCurrentPath", () => {
  it("should return current path", () => {
    const MemRouterComponent = ({
      children,
    }: {
      children: React.ReactNode;
    }) => <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>;
    const { result } = renderHook(() => useCurrentPath(), {
      wrapper: MemRouterComponent,
    });
    expect(result.current).toBe("/");
  });

  it("should return nested path with params", () => {
    const MemRouterComponent = ({
      children,
    }: {
      children: React.ReactNode;
    }) => (
      <MemoryRouter initialEntries={["/test/123"]}>
        <Routes>
          <Route path="/test" element={<div>{children}</div>}>
            <Route path=":id" element={<div>{children}</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const { result } = renderHook(() => useCurrentPath(), {
      wrapper: MemRouterComponent,
    });
    expect(result.current).toBe("/test/:id");
  });
});
