import React, { Component } from 'react';


// import styles
import './../../App.scss';

export default class Home extends Component{
    render(){
        return(
          <div className="container">
            <div id="header"><h1>Hello, I'm John!</h1></div>
            <div id="about">
                <h2>A Designer & Developer living in Kansas City and working for Garmin.</h2>
                <h3>Lorem ipsum dolor amet vice banh mi aesthetic authentic, small batch truffaut farm-to-table sriracha squid post-ironic actually af. Chambray direct trade meditation fixie 3.</h3>
            </div>
            <ul className="caseStudies">
            <h3>My Work</h3>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
            </ul>
          </div>
          
        )
    }
}
