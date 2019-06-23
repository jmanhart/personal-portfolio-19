import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

// Importing Image assets
import photo from './../../images/me-blk-sun.jpg';

// Import styles
import './../../App.scss';

// Import Components
import VerticalCard from '../../components/cards/vertical-card.js';
import ExampleII from '../../components/test.js';


export default class Home extends Component{
    render(){
        return(
          <div className="container page">
            <ExampleII />
            <h3 className="header-type-01">Recent Work</h3>
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
          </div>
        )
    }
}
