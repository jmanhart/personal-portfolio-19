import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//Importing Local Styles
import './styles.scss';

export default class NavBar extends Component{
    render(){
        return(
          <div className="nav-bar-wrapper">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        )
    }
}


