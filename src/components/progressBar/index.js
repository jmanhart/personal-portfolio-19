import * as React from "react";
import styled from "react-emotion";

import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform
} from "framer-motion";

const ProgressBar = () => {
  const intViewportWidth = window.innerWidth;
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, intViewportWidth]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);
  console.log(pathLength);
  return (
    <SvgWrapper>
      <motion.rect
        style={{
          width: pathLength,
          height: "4px"
        }}
      />
    </SvgWrapper>
  );
};

export default ProgressBar;

const SvgWrapper = styled("svg")`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 10px;
  z-index: 1001;
`;
