import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./containers/home/index.js";
import About from "./containers/about/index.js";
import MobileAnimations from "./containers/case-studies/mobile-animations";
import MoseyApp from "./containers/case-studies/mosey-app.js";
import FreeBird from "./containers/case-studies/free-bird.js";
import CobbApp from "./containers/case-studies/cobb-app.js";
import Design from "./containers/design/index.js";
import Coffee from "./containers/coffee/index.js";
import Kalita from "./containers/coffee/kalita.js";

import PitchPage from "./containers/pages/Pitch.js";
import SandBox from "./containers/pages/Sandbox.js";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/design" component={Design} />
      <Route path="/coffee" component={Coffee} />
      <Route path="/coffee/kalita" component={Kalita} />

      {/* Case Studies */}
      <Route
        path="/case-study/mobile-animations"
        component={MobileAnimations}
      />
      <Route path="/case-study/mosey-app" component={MoseyApp} />
      <Route path="/case-study/free-bird" component={FreeBird} />
      <Route path="/case-study/cobb-app" component={CobbApp} />
      <Route path="/pitch" component={PitchPage} />
      <Route path="/sandbox" component={SandBox} />
    </Switch>
  </main>
);

export default Main;
