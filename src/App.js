import React, { Component } from 'react';

// Importing in Routes
import Main from './main.js'

// Importing in Components
import NavBar from './components/nav-bar/index.js'

export default class App extends Component{
    render(){
        return(
          < >
            <NavBar />
            <Main />
          </>
        )
    }
}

