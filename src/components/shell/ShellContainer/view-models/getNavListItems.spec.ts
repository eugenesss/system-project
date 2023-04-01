import getNavListItems, {
  transformRouteListToNavList,
} from "./getNavListItems";
import { makeShellDrawerItemMock } from "@components/shell/ShellContainer/view-models/DrawerItem.mocks";

describe("getNavListItems", () => {
  it("should map ShellDrawerItem to NavListItemProps", () => {
    const mockDrawerItem = makeShellDrawerItemMock();
    const wrapper = getNavListItems(mockDrawerItem.path)({
      mainMenuRouteList: [mockDrawerItem],
      bottomMenuRouteList: [mockDrawerItem],
    });
    expect(wrapper).toEqual(
      expect.objectContaining({
        mainMenuList: expect.arrayContaining([
          expect.objectContaining({
            path: expect.any(String),
            Icon: expect.anything(),
            label: expect.any(String),
            isActive: expect.any(Boolean),
          }),
        ]),
        bottomMenuList: expect.arrayContaining([
          expect.objectContaining({
            path: expect.any(String),
            Icon: expect.anything(),
            label: expect.any(String),
            isActive: expect.any(Boolean),
          }),
        ]),
      })
    );
  });
});

describe("transformRouteListToNavList", () => {
  it("should transform ShellDrawerItem to NavListItemProps", () => {
    const mockDrawerItem = makeShellDrawerItemMock();
    const wrapper = transformRouteListToNavList(
      mockDrawerItem,
      mockDrawerItem.path
    );
    expect(wrapper).toEqual(
      expect.objectContaining({
        path: expect.any(String),
        Icon: expect.anything(),
        label: expect.any(String),
        isActive: expect.any(Boolean),
      })
    );
  });
});
