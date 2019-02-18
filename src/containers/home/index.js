import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importing Image assets
import photo from './../../images/me-blk-sun.jpg';

// Import styles
import './../../App.scss';

// Import Components
import Grid from '../../components/grid';
import List from '../../components/list';


export default class Home extends Component{
    render(){
        return(
          <div className="container">
            <div id="header">
                <img src={photo} id="profile-image" img="true" alt="Me"/>
                <h1>Hello, I'm <Link to="/about"><u>John!</u></Link></h1>
                <h2>A Designer & Developer living in Kansas City and working for <u>Garmin</u>.</h2>
            </div>
            <Grid />
            <List />
          </div>
          
        )
    }
}

{/*

            <Grid 
                path={data.path}
                title={data.title}
                description={data.description}
            />

            <Grid 
                path={data.path}
                title={data.title}
                description={data.description}
            />
*/}