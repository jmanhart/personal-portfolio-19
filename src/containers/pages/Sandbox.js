import * as React from "react";
import styled from "react-emotion";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
  useCycle
} from "framer-motion";
// import styles
import "./../../App.scss";

import BasicPage from "../../components/containers/BasicPageWrapper.js";
import BasicContainer from "../../components/containers/basic.js";
import ProgressBar from "../../components/progressBar/index.js";
const rodeo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SandBox = () => {
  const variants = {
    visible: {
      opacity: 1
    },
    notVisible: {
      opacity: 0
    }
  };

  return (
    <BasicPage>
      <ProgressBar />
      <BasicContainer>
        <motion.div
          style={{
            background: onScreen ? "green" : "blue",
            width: "100%",
            height: "10em",
            marginBottom: "2em"
          }}
        />
      </BasicContainer>
    </BasicPage>
  );
};

export default SandBox;

const DummyObject = styled("div")`
  background: blue;
  width: 100%;
  height: 10em;
  margin-bottom: 2em;
`;

// {rodeo.map(item => (
//   <DummyObject {...item} />
// ))}
// scaleX: scrollYProgress
// const rodeo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const intViewportWidth = window.innerWidth;
// const [isComplete, setIsComplete] = useState(false);
// const { scrollYProgress } = useViewportScroll();
// const yRange = useTransform(scrollYProgress, [0, 1], [0, intViewportWidth]);
// const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
