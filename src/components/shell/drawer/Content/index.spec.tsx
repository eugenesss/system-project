import { renderWithRouter } from "@utils/testing";
import DrawerContent, { DataTestId, DrawerContentProps } from ".";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavListItemProps } from "@components/shell/drawer/NavListItem";

const mockNavListItem: NavListItemProps = {
  path: "/test",
  label: "test",
  Icon: DashboardIcon,
  isActive: false,
};

describe("DrawerContent", () => {
  it("should render", () => {
    const mockProps: DrawerContentProps = {
      mainNavList: [mockNavListItem, { ...mockNavListItem, path: "/test123" }],
      bottomNavList: [mockNavListItem],
      logo: <div data-testid="dc-logo">logo</div>,
    };
    const { getByTestId } = renderWithRouter(<DrawerContent {...mockProps} />);
    expect(getByTestId(DataTestId.Wrapper)).toBeTruthy();
    expect(getByTestId(DataTestId.MainNavList).childElementCount).toBe(2);
    expect(getByTestId(DataTestId.BottomNavList).childElementCount).toBe(1);
  });
});
