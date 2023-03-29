import ShellContainer, { DataTestId } from "./ShellContainer";
import { DataTestId as DesktopDrawerDataTestId } from "@components/shell/drawer/Drawer.desktop";
import { DataTestId as MobileDrawerDataTestId } from "@components/shell/drawer/Drawer.mobile";
import { renderWithRouter } from "@test-utils";
import { makeShellDrawerItemMock } from "@components/shell/view-models/DrawerItem.mocks";

import mediaQuery from "css-mediaquery";

function createMatchMedia(width: number) {
  return (query: string) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      addListener: jest.fn(),
      removeListener: jest.fn(),
      onchange: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: () => true,
    };
  };
}

function resizeScreenSize(width: number) {
  window.matchMedia = createMatchMedia(width);
}

describe("ShellContainer", () => {
  afterEach(() => {
    resizeScreenSize(1024);
  });

  it("should render desktop drawer - hides mobile", () => {
    resizeScreenSize(1200);
    const mockDrawerItem = makeShellDrawerItemMock();
    const { getByTestId, queryByTestId } = renderWithRouter(
      <ShellContainer
        mainNavList={[mockDrawerItem]}
        bottomNavList={[mockDrawerItem]}
      >
        <div>test</div>
      </ShellContainer>
    );
    expect(getByTestId(DesktopDrawerDataTestId.Drawer)).toBeTruthy();
    expect(queryByTestId(MobileDrawerDataTestId.Drawer)).toBeNull();
  });

  it("should render mobile drawer - hides desktop, close drawer", () => {
    resizeScreenSize(400);
    const mockDrawerItem = makeShellDrawerItemMock();
    const { getByTestId, queryByTestId } = renderWithRouter(
      <ShellContainer
        mainNavList={[mockDrawerItem]}
        bottomNavList={[mockDrawerItem]}
      >
        <div>test</div>
      </ShellContainer>
    );
    expect(queryByTestId(DesktopDrawerDataTestId.Drawer)).toBeNull();
    expect(getByTestId(MobileDrawerDataTestId.Drawer)).toBeTruthy();
    expect(getByTestId(MobileDrawerDataTestId.Drawer)).toHaveClass(
      "MuiModal-hidden"
    );
  });

  it("should render mobile drawer - show drawer", async () => {
    resizeScreenSize(400);
    const mockDrawerItem = makeShellDrawerItemMock();
    const { user, getByTestId } = renderWithRouter(
      <ShellContainer
        mainNavList={[mockDrawerItem]}
        bottomNavList={[mockDrawerItem]}
      >
        <div>test</div>
      </ShellContainer>
    );
    await user.click(getByTestId(DataTestId.MobileDrawerOpenBtn));

    expect(getByTestId(MobileDrawerDataTestId.Drawer)).not.toHaveClass(
      "MuiModal-hidden"
    );
  });
});
