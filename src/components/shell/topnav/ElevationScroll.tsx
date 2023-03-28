import React, { FunctionComponent } from "react";
import { useScrollTrigger } from "@mui/material";

interface ElevationScrollProps {
  children: React.ReactElement;
  overrideTrigger?: boolean; // for testing purposes
}

const ElevationScroll: FunctionComponent<ElevationScrollProps> = ({
  children,
  overrideTrigger,
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: overrideTrigger || trigger ? 1 : 0,
  });
};

export default ElevationScroll;
