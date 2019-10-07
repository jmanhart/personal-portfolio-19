import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importing Image assets
import photo from './../../images/me-blk-sun.jpg';

export default function HeaderHomeBlock() {
    
    const greeting = [
        "Hello,",
        "Hi,",
        "Howdy,",
        "Hiya,",
        "Yo,",
        "Aloha,",
        "Sup,",
        "Hullo,",
        "Hola,",
        "Ciao,",
        "👋🏻",
        "Hej,",
        "Bonjour,",
        "Oh hey,",
        "여보세요,",
        "Salut,"
    ]

    let rando = Math.floor((Math.random() * greeting.length));

    return (
        <>
            <div id="header">
                <img src={photo} id="profile-image" img="true" alt="Me"/>
                <h1 className="DUDE">{greeting[rando]} I'm <Link to="/about" className="internal-link">John!</Link></h1>
                <h2>A Product Designer living in Kansas City.</h2>
                <h2>Currently at <a href="https://sentry.io/welcome/" className="external-link">Sentry</a></h2>
            </div>
        </>
    );
}