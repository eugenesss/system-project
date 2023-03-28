import getPageTitle from "./getPageTitle";
import { makeShellDrawerItemMock } from "@components/shell/view-models/DrawerItem.mocks";

describe("getPageTitle", () => {
  it("should get page title if found", () => {
    const mockItem = makeShellDrawerItemMock();
    const wrapper = getPageTitle({
      navItems: [mockItem],
      curRoute: mockItem.path,
    });
    expect(wrapper).toBe(mockItem.label);
  });

  it("should return empty string if not found", () => {
    const mockItem = makeShellDrawerItemMock();
    const wrapper = getPageTitle({
      navItems: [mockItem],
      curRoute: "something",
    });
    expect(wrapper).toBe("");
  });
});
