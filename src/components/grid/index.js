import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importing Image assets
import photo from './../../images/me-blk-sun.jpg';

// Import styles
import './../../App.scss';

// Import styles
import data from './../../data.js';

export default class Grid extends Component{
    render(){
        return(
          <div className="container">
            {/* TODO: Map this */}
            <ul className="caseStudies">
            <h4>Case Studies</h4>
            {data.casestudies.map((item, index) => {
                return (
                    <li key={index}>
                        <Link to={item.path}>
                            <div></div>
                            <h3>{item.title}</h3> 
                            <p>{item.description}</p>
                        </Link>
                    </li>  
                )
            })}
            </ul>
          </div>
        )
    }
}


{/* 

    <Link to={this.props.path}>
        <div></div>
        <h3>{this.props.title}</h3> 
        <p>{this.props.description}</p>
    </Link>
    <Link to={item.path}>
        <div></div>
        <h3>{item.title}</h3> 
        <p>{item.description}</p>
    </Link>
*/}

{/* 
    <h3 className="header-type-01">Recent Work</h3>
    <Header>HOWDY</Header>
    
    <div className="layout-grid-columns">
        <VerticalCard 
            pageLink="/case-study/mobile-animations"
            label="Lottie"
            description="Disrupt stumptown gastropub locavore art party. Direct trade listicle selvge."
        />
        <VerticalCard 
            pageLink="/case-study/mobile-animations"
            label="Mosey"
            description="Disrupt stumptown gastropub locavore art party. Direct trade listicle selvge."
        />
        <VerticalCard 
            pageLink="/case-study/mobile-animations"
            label="Garmin Design System"
            description="Disrupt stumptown gastropub locavore art party. Direct trade listicle selvge."
        />
        <VerticalCard 
            pageLink="/case-study/mobile-animations"
            label="Voice"
            description="Disrupt stumptown gastropub locavore art party. Direct trade listicle selvge."        
        />
    </div>
    */}