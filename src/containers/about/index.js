import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from './../../components/nav-bar/index.js';

export default class About extends Component{
    render(){
        return(
          <div>
              <NavBar />
              <h1>ABOUT JOHN</h1>
  


          </div>
        )
    }
}
