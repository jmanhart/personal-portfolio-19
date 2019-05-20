import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importing Image assets
import photo from './../../images/me-blk-sun.jpg';

// Import styles
import './../../App.scss';

// Import Components
import VerticalCard from '../../components/cards/vertical-card.js';


export default class Home extends Component{
    render(){
        return(
          <div className="container page">
            <div id="header">
                <img src={photo} id="profile-image" img="true" alt="Me"/>
                <h1>Hello, I'm <Link to="/about" className="internal-link">John!</Link></h1>
                <h2>A Designer & Developer living in Kansas City. <br />
                Currently at Garmin.</h2>
            </div>
            <h3 className="header-type-01">Recent Work</h3>
            <div className="layout-grid-columns">
                <VerticalCard 
                    pageLink="/case-study/mobile-animations"
                    label="Animation Process"
                    description="Disrupt stumptown gastropub locavore art party. Direct trade listicle selvge."
                />
                <VerticalCard 
                    pageLink="/case-study/mobile-animations"
                    label="Mosey"
                    description="Disrupt stumptown gastropub locavore art party. Direct trade listicle selvge."
                />
                <VerticalCard 
                    pageLink="/case-study/mobile-animations"
                    label="Freebird"
                    description="Disrupt stumptown gastropub locavore art party. Direct trade listicle selvge."
                />
                <VerticalCard 
                    pageLink="/case-study/mobile-animations"
                    label="Cobb Connection"
                    description="Disrupt stumptown gastropub locavore art party. Direct trade listicle selvge."        
                />
            </div>
          </div>
        )
    }
}
