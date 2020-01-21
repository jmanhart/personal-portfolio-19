import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Importing Image assets
import photo from "./../../images/me-blk-sun.jpg";
import data from "./../../data.js";

export default function HeaderHomeBlock() {
  let rando = Math.floor(Math.random() * data.greetings.length);
  const variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return (
    <>
      <div id="header">
        <img src={photo} id="profile-image" img="true" alt="Me" />
        <motion.h1 initial="hidden" animate="visible" variants={variants}>
          {data.greetings[rando]} I'm{" "}
          <Link to="/about" className="internal-link">
            John!
          </Link>
        </motion.h1>
        <h2>A Product Designer living in Kansas City.</h2>
        <h2>
          Currently at{" "}
          <a href="https://sentry.io/welcome/" className="external-link">
            Sentry
          </a>
        </h2>
      </div>
    </>
  );
}
