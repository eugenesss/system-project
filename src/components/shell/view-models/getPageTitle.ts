import { ShellDrawerItem } from "@components/shell/view-models/types";

type GetPageTitleProps = {
  navItems: ShellDrawerItem[];
  curRoute: string;
};

const getPageTitle = ({ navItems, curRoute }: GetPageTitleProps): string => {
  const itemIsFound: ShellDrawerItem | undefined = navItems.find(
    (item) => item.path == curRoute
  );
  if (itemIsFound) {
    return itemIsFound.label;
  }
  return "";
};

export default getPageTitle;
