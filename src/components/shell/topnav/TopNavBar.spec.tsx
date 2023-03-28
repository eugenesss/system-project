import { render } from "@utils/testing";
import TopNavBar from "./TopNavBar";

describe("TopNavBar", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <TopNavBar>
        <div>test</div>
      </TopNavBar>
    );
    expect(getByTestId("top-app-bar")).toBeTruthy();
  });
});
