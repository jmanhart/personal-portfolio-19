import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importing Image assets
import photo from './../../images/me-blk-sun.jpg';

// import styles
import './../../App.scss';




export default class Home extends Component{
    render(){
        return(
          <div className="container">

            <div id="header">
                <img src={photo} id="profile-image" img="true" alt="Me"/>
                <h1>Hello, I'm <u>John!</u></h1>
            </div>
            <div id="about">
                <h2>A Designer & Developer living in Kansas City and working for <u>Garmin</u>.</h2>
                <h3>Lorem ipsum dolor amet vice banh mi aesthetic authentic, small batch truffaut farm-to-table sriracha squid post-ironic actually af. Chambray direct trade meditation fixie 3.</h3>
                <br/>
                <h3><Link to="/about"><u>More about me</u></Link></h3>
            </div>

            {/* TODO: Map this */}
            <ul className="caseStudies">
            <h4>Case Studies</h4>
                
                {/* Case Study One - Lottie - Garmin */}
                <li>
                    <Link to="/case-study/garmin/lottie">
                        <div></div>
                        <h3>Project Title</h3> 
                        <h3>Lorem ipsum dolor amet vice banh mi aesthetic</h3>
                    </Link>
                </li>

                {/* Case Study Two - Mosey */}
                <li>
                    <a href="somthing">
                        <div></div>
                        <h3>Project Title</h3>  
                        <h3>Lorem ipsum dolor amet vice banh mi aesthetic</h3>
                    </a>
                </li>

                {/* Case Study Three - How Many Free birds */}
                <li>
                    <a href="somthing">
                        <div></div>
                        <h3>Project Title</h3>  
                        <h3>Lorem ipsum dolor amet vice banh mi aesthetic</h3>
                    </a>
                </li>

                {/* Case Study Three - Cobb */}
                <li>
                    <a href="somthing">
                        <div></div>
                        <h3>Project Title</h3>  
                        <h3>Lorem ipsum dolor amet vice banh mi aesthetic</h3>
                    </a>
                </li>

            </ul>
          </div>
          
        )
    }
}
