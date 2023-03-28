import { useCurrentPath } from "@utils/useCurrentPath";
import { FunctionComponent } from "react";

const InventoryPage: FunctionComponent = () => {
  const curRoute = useCurrentPath();
  console.log(curRoute);
  return (
    <div>
      <p>inventory</p>
    </div>
  );
};

export default InventoryPage;
