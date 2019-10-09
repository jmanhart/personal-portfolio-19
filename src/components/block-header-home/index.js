import React from 'react';
import { Link } from 'react-router-dom';

// Importing Image assets
import photo from './../../images/me-blk-sun.jpg';
import data from './../../data.js';

export default function HeaderHomeBlock() {
    
    let rando = Math.floor((Math.random() * data.greetings.length));

    return (
        <>
            <div id="header">
                <img src={photo} id="profile-image" img="true" alt="Me"/>
                <h1 className="DUDE">{data.greetings[rando]} I'm <Link to="/about" className="internal-link">John!</Link></h1>
                <h2>A Product Designer living in Kansas City.</h2>
                <h2>Currently at <a href="https://sentry.io/welcome/" className="external-link">Sentry</a></h2>
            </div>
        </>
    );
}