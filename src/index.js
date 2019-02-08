import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Importing Components
import App from './App';
import Home from './containers/home/index.js';
import About from './containers/about/index.js';

// Importing Styles
import './index.css';

const routes = () => (
    <Route path="/" component={App}>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
    </Route>
);

ReactDOM.render(
    <Router
        routes={routes} 
    />, 
    document.getElementById('root')
);


