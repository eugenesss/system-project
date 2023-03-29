import { NavListItemProps } from "../drawer/NavListItem";
import { ShellDrawerItem } from "@components/shell/ShellContainer";

const getNavListItems =
  (curRoute: string) =>
  (params: {
    mainMenuRouteList: ShellDrawerItem[];
    bottomMenuRouteList: ShellDrawerItem[];
  }): {
    mainMenuList: NavListItemProps[];
    bottomMenuList: NavListItemProps[];
  } => {
    const { mainMenuRouteList, bottomMenuRouteList } = params;

    const mainMenuList: NavListItemProps[] = mainMenuRouteList.map(
      (routeItem) => transformRouteListToNavList(routeItem, curRoute)
    );
    const bottomMenuList: NavListItemProps[] = bottomMenuRouteList.map(
      (routeItem) => transformRouteListToNavList(routeItem, curRoute)
    );

    return { mainMenuList: mainMenuList, bottomMenuList: bottomMenuList };
  };

export default getNavListItems;

export const transformRouteListToNavList = (
  routeItem: ShellDrawerItem,
  curRoute: string
): NavListItemProps => {
  return {
    label: routeItem.label,
    Icon: routeItem.Icon,
    path: routeItem.path,
    isActive: routeItem.path == curRoute,
  };
};
