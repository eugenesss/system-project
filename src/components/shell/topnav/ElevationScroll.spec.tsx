import { render } from "@test-utils";
import ElevationScroll from "./ElevationScroll";

it("should render elevation on scroll", () => {
  const { getByTestId } = render(
    <ElevationScroll>
      <div data-testid="top-bar-elevation">test</div>
    </ElevationScroll>
  );
  expect(getByTestId("top-bar-elevation")).toMatchInlineSnapshot(`
    <div
      data-testid="top-bar-elevation"
      elevation="0"
    >
      test
    </div>
  `);
});

it("should render elevation on scroll - trigger", () => {
  const { getByTestId } = render(
    <ElevationScroll overrideTrigger={true}>
      <div data-testid="top-bar-elevation">test</div>
    </ElevationScroll>
  );
  expect(getByTestId("top-bar-elevation")).toMatchInlineSnapshot(`
    <div
      data-testid="top-bar-elevation"
      elevation="1"
    >
      test
    </div>
  `);
});
