import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importing Image assets
import photo from './../../images/me-blk-sun.jpg';

// import styles
import './../../App.scss';



const gridData = [
    {
        "path": "/case-study/mobile-animations",
        "title": "Mobile Aniamtions",
        "description":"Lorem ipsum dolor amet vice banh mi aesthetic"
    },
    {
        "path": "/case-study/mobile-animations",
        "title": "Netflix",
        "description":"Lorem ipsum dolor amet vice banh mi aesthetic"
    },
    {
        "path": "/case-study/mobile-animations",
        "title": "Mosey App",
        "description":"Lorem ipsum dolor amet vice banh mi aesthetic"
    },
    {
        "path": "/case-study/mobile-animations",
        "title": "Free Bird",
        "description":"Lorem ipsum dolor amet vice banh mi aesthetic"
    },
    {
        "path": "/case-study/mobile-animations",
        "title": "Cobb",
        "description":"Lorem ipsum dolor amet vice banh mi aesthetic"
    },
]



export default class CaseStudyGrid extends Component{
    render(){
        return(
          <div className="container">
            {/* TODO: Map this */}
            <ul className="caseStudies">
            <h4>Case Studies</h4>
            {gridData.map((item) => {
                return (
                    <li>
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

