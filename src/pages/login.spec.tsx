import { renderWithRouter } from "@test-utils";
import LoginPage from "./login";

describe("LoginPage", () => {
  it("should render", () => {
    renderWithRouter(<LoginPage />);
    expect(1 + 1).toBe(2);
  });
});
