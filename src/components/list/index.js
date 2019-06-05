import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importing Image assets
import photo from './../../images/me-blk-sun.jpg';

// Import Global Styles
import './../../App.scss';

// Import Local Styles
import './styles.scss'

// Import styles
import sketchBookData from './../../data.js';


const devSketchBookData = [
    {
        "id":"framer-sketchbook",
        "path": "somewhere",
        "title": "Framer Sketchbook",
        "description":"Running Sketchbook for Framer interactions, basic concepts, tips, and tricks."
    },
    {
        "id":"python-sketchbook",
        "path": "somewhere",
        "title": "Python Sketchbook",
        "description":"Collection of basics and my progress of learning Python."
    },
    {
        "id":"swift-sketchbook",
        "path": "somewhere",
        "title": "Swift Sketchbook",
        "description":"Sketchs and tests using Swift to build UI."
    },
]


export default class List extends Component{
    render(){
        return(
          <div className="container">
            {/* TODO: Map this */}
            <ul className="sketchBooks">
            <h4>Dev Sketch Books</h4>
            {devSketchBookData.map((item, index) => {
                return (
                    <li key={index}>
                        <Link to={item.path}>
                            <h3>{item.title}</h3> 
                         
                        </Link>
                    </li>  
                )
            })}
            </ul>
          </div>
        )
    }
}
