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
                    <Link to="/case-study/mobile-animations">
                        <div></div>
                        <h3>Mobile Animations</h3> 
                        <p>Lorem ipsum dolor amet vice banh mi aesthetic</p>
                    </Link>
                </li>

                {/* Case Study Two - Mosey */}
                <li>
                    <Link to="/case-study/mobile-animations">
                        <div></div>
                        <h3>Mosey App</h3>  
                        <p>Lorem ipsum dolor amet vice banh mi aesthetic</p>
                    </Link>
                </li>

                {/* Case Study Three - How Many Free birds */}
                <li>
                    <Link to="/case-study/mobile-animations">
                        <div></div>
                        <h3>Free as a Bird</h3>  
                        <p>Lorem ipsum dolor amet vice banh mi aesthetic</p>
                    </Link>
                </li>

                {/* Case Study Three - Cobb */}
                <li>
                    <Link to="/case-study/mobile-animations">
                        <div></div>
                        <h3>Cobb</h3>  
                        <p>Lorem ipsum dolor amet vice banh mi aesthetic</p>
                    </Link>
                </li>

                {/* Case Study Three - Netflix */}
                <li>
                    <Link to="/case-study/mobile-animations">
                        <div></div>
                        <h3>Cobb</h3>  
                        <p>Lorem ipsum dolor amet vice banh mi aesthetic</p>
                    </Link>
                </li>

            </ul>
          </div>
          
        )
    }
}
