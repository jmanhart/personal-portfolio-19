import * as React from "react";
import styled from "react-emotion";

import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";

const ScrollLoad = props => {
  return (
    <div>
      <ScrollLoadWrapper>{props.children}</ScrollLoadWrapper>
    </div>
  );
};

export default ScrollLoad;

const ScrollLoadWrapper = styled("div")`
  background: green;
`;
