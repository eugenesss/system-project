import { render } from "@testing-library/react";
import DrawerDesktop, { DataTestId } from "./Drawer.desktop";

describe("ShellDrawer - Desktop", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <DrawerDesktop>
        <div>test component</div>
      </DrawerDesktop>
    );
    expect(getByTestId(DataTestId.Drawer)).toMatchInlineSnapshot(`
      <div
        class="MuiDrawer-root MuiDrawer-docked css-13pb7hi-MuiDrawer-docked"
        data-testid="shelldrawer-desktop"
      >
        <div
          class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-12i7wg6-MuiPaper-root-MuiDrawer-paper"
        >
          <div>
            test component
          </div>
        </div>
      </div>
    `);
  });
});
