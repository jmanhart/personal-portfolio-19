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
{/*
<Route
          render={({ location }) => {
            const { pathname } = location;
            return (
              <TransitionGroup>
                <CSSTransition 
                  key={pathname}
                  classNames="page"
                  timeout={{
                    enter: 1000,
                    exit: 1000,
                  }}
                >
                  <Route
                    location={location}
                    render={() => (
                      <Switch>
                        <Route
                          exact
                          path="/"
                          component={Home}
                        />
                        <Route
                          path="/about"
                          component={About}
                        />
                        <Route
                          component={Error404}
                        />
                      </Switch>
                    )}
                  />
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />

        */}