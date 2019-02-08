import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from './../../components/nav-bar/index.js';

export default class Home extends Component{
    render(){
        return(
          <div>
              <NavBar />
              <h1>HELLLLLLOOO JOHN</h1>
  


          </div>
        )
    }
}
