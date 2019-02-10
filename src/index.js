import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Importing in Continers
import Home from './containers/home/index.js';
import About from './containers/about/index.js';

// Importing styles
import './containers/page/styles.css';


const supportsHistory = 'pushState' in window.history;


const App = ({  }) => (
  <BrowserRouter forceRefresh={!supportsHistory}>
    <div>
    <h1>Hello, I'm <u>John!</u></h1>
    <main>
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
                    </Switch>
                  )}
                />
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
  </main>
    </div>
  </BrowserRouter>
);


render(<App />, document.getElementById('root'));


