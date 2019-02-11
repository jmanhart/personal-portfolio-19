import React, { Component } from 'react';

// Importing in Routes
import Main from './main.js'

// Importing in Components
// import AppFooter from './components/app-footer/index.js';
import Footer from './components/footer/index.js';

// Importing in Styles
import './App.scss';

export default class App extends Component{
    render(){
        return(
          <div id="app-container">
            <Main />
            <Footer />
          </div >
        )
    }
}

