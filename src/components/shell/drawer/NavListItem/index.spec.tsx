import { renderWithRouter } from "@utils/testing";
import NavListItem, { NavListItemProps, DataTestId } from ".";
import DashboardIcon from "@mui/icons-material/Dashboard";

describe("NavListItem", () => {
  it("should render", () => {
    const mockProps: NavListItemProps = {
      path: "/test",
      label: "test",
      Icon: DashboardIcon,
      isActive: false,
    };
    const { getByTestId } = renderWithRouter(<NavListItem {...mockProps} />);
    expect(getByTestId(DataTestId.Item)).toMatchInlineSnapshot(`
      <li
        class="MuiListItem-root MuiListItem-gutters css-1nxmd3h-MuiListItem-root"
        data-testid="nav-list-item"
      >
        <a
          class="css-1ud3qrs"
          data-testid="nav-list-link"
          href="/test"
        >
          <div
            class="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-alignItemsFlexStart MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-alignItemsFlexStart css-ol8p1s-MuiButtonBase-root-MuiListItemButton-root"
            role="button"
            tabindex="0"
          >
            <svg
              aria-hidden="true"
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              data-testid="DashboardIcon"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
              />
            </svg>
            <div
              class="MuiListItemText-root css-1ci5qas-MuiListItemText-root"
            >
              <span
                class="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-10hburv-MuiTypography-root"
              >
                test
              </span>
            </div>
            <span
              class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
            />
          </div>
        </a>
      </li>
    `);
  });
});
