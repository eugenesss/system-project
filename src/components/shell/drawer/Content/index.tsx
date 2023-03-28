import { FunctionComponent } from "react";
import SpaceDivider from "@components/common/SpaceDivider";
import NavListItem, {
  NavListItemProps,
} from "@components/shell/drawer/NavListItem";
import {
  NavListTitleText,
  MainMenuList,
  BottomMenuList,
  DrawerWrapper,
} from "./index.styles";

export enum DataTestId {
  Wrapper = "dc-wrapper",
  MainNavList = "dc-main-nav-list",
  BottomNavList = "dc-bottom-nav-list",
}

export interface DrawerContentProps {
  mainNavList: NavListItemProps[];
  bottomNavList: NavListItemProps[];
  logo: React.ReactElement;
}

const DrawerContent: FunctionComponent<DrawerContentProps> = ({
  mainNavList,
  bottomNavList,
  logo,
}) => {
  return (
    <DrawerWrapper data-testid={DataTestId.Wrapper}>
      <div>
        {logo}
        <SpaceDivider spacing={10} />
        <NavListTitleText>Main Menu</NavListTitleText>
        <SpaceDivider spacing={1} />
        <MainMenuList data-testid={DataTestId.MainNavList}>
          {mainNavList.map(({ path, ...others }) => (
            <NavListItem key={path} path={path} {...others} />
          ))}
        </MainMenuList>
      </div>
      <div>
        <BottomMenuList data-testid={DataTestId.BottomNavList}>
          {bottomNavList.map(({ path, ...others }) => (
            <NavListItem key={path} path={path} {...others} />
          ))}
        </BottomMenuList>
      </div>
    </DrawerWrapper>
  );
};

export default DrawerContent;
