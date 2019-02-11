import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importing Image assets
import photo from './../../images/me-blk-sun.jpg';

// import styles
import './../../App.scss';

export default class CaseStudyGrid extends Component{
    render(){
        return(
          <div className="container">
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
