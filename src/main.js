import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './containers/home/index.js';
import About from './containers/about/index.js';



//Importing Case Studies
import MobileAnimations from './containers/case-studies/mobile-animations';
import MoseyApp from './containers/case-studies/mosey-app.js';
import FreeBird from './containers/case-studies/free-bird.js';
import CobbApp from './containers/case-studies/cobb-app.js';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      {/* Case Studies */}
      <Route path='/case-study/mobile-animations' component={MobileAnimations}/>
      <Route path='/case-study/mosey-app' component={MoseyApp}/>
      <Route path='/case-study/free-bird' component={FreeBird}/>
      <Route path='/case-study/cobb-app' component={CobbApp}/>
    </Switch>
  </main>
)

export default Main
