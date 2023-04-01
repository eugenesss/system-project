import { render, renderHook, screen } from "@test-utils";
import { useAuthContext, AuthContext } from "./";
import MockAuthContextProvider from "./index.mocks";

describe("AuthContext - Provider", () => {
  it("should render token", () => {
    const providerProps = {
      token: "C3PO",
    };
    render(
      <AuthContext.Consumer>
        {(value) => <p>Received: {value.token}</p>}
      </AuthContext.Consumer>,
      {
        overrideProviderProps: {
          authContext: providerProps,
        },
      }
    );
    expect(screen.getByText(/^Received:/).textContent).toBe("Received: C3PO");
  });
});

describe("AuthContext - useAuthContext", () => {
  it("should render value of context", () => {
    const { result } = renderHook(useAuthContext, {
      wrapper: MockAuthContextProvider,
    });
    expect(result.current).toEqual(
      expect.objectContaining({ token: expect.any(String) })
    );
  });
});
