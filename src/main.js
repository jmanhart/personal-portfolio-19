import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './containers/home/index.js';
import About from './containers/about/index.js';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main

