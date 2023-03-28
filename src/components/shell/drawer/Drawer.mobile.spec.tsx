import { render } from "@testing-library/react";
import DrawerMobile, { DataTestId } from "./Drawer.mobile";

describe("ShellDrawer - Mobile", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <DrawerMobile openState={true} onCloseAction={jest.fn()}>
        <div>test</div>
      </DrawerMobile>
    );
    expect(getByTestId(DataTestId.Drawer)).toMatchInlineSnapshot(`
      <div
        class="MuiDrawer-root MuiDrawer-modal MuiModal-root css-1mj4luj-MuiModal-root-MuiDrawer-root"
        data-testid="shelldrawer-mobile"
        role="presentation"
      >
        <div
          aria-hidden="true"
          class="MuiBackdrop-root MuiModal-backdrop css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop"
          style="opacity: 1; webkit-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
        />
        <div
          data-testid="sentinelStart"
          tabindex="0"
        />
        <div
          class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation16 MuiDrawer-paper MuiDrawer-paperAnchorLeft css-4t3x6l-MuiPaper-root-MuiDrawer-paper"
          tabindex="-1"
        >
          <div>
            test
          </div>
        </div>
        <div
          data-testid="sentinelEnd"
          tabindex="0"
        />
      </div>
    `);
  });
});
