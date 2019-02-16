import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './containers/home/index.js';
import About from './containers/about/index.js';



//Importing Case Studies
import CaseStudyGarminLottie from './containers/case-studies/garmin-lottie.js';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/case-study/mobile-animations' component={CaseStudyGarminLottie}/>
    </Switch>
  </main>
)

export default Main
