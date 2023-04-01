import { FunctionComponent } from "react";
import { Typography } from "@mui/material";

const DashboardPage: FunctionComponent = () => {
  return (
    <div>
      <Typography variant="body1">
        Perfect. Could you explain why this works and not my approach though?
        scrollTarget is still undefined when useScrollTrigger is called for the
        first time. I know that by using useState the function will get called
        again when the ref is no longer undefined, but shouldnt the first call
        still throw? Is there some magic by which the effect used internally
        knows that the state will change but not that the ref will be populated?
        – CuddleBunny Jun 26, 2019 at 2:54 1 No there is no magic, the
        useScrollTrigger only works by the parameters it is given, that fact
        that it throws on null and not on undefined, is due to the way its
        implemented. See here for more info
        material-ui.com/components/app-bar/…. undefined is usually better than
        null anyway, because undefined triggers the default parameter behaviour
        of functions while null does not do that. But anyway you need a state
        because the useRef hook does not cause a re-render when the ref callback
        is called ( unless you set a state yourself). – ehab Jun 26, 2019 at
        8:47 This code is not working for me. I want the scrollTrigger to be
        true if I scroll to a component/ node. I think the scrollTarget is not
        working. I checked the state and the state gets set with the div, but
        nothing change when I start scrolling. scrollTrigger is always false.
        Any idea? – wyndham007 Jan 12, 2021 at 11:50{" "}
      </Typography>
    </div>
  );
};

export default DashboardPage;
