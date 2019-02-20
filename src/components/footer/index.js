import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Importing Local Styles
import './styles.scss';

const footerData = {
    "socialmedia": [
        {
            "id":"github",
            "title":"Github",
            "path": "https://github.com/jmanhart"
        },
        {
            "id":"dribbble",
            "title":"Dribbble",
            "path": "https://dribbble.com/manhart"
        },
        {
            "id":"twitter",
            "title":"Twitter",
            "path": "https://twitter.com/johnmanhart"
        },
        {
            "id":"medium",
            "title":"Medium",
            "path": "https://medium.com/@JohnManhart"
        },
        {
            "id":"linkedin",
            "title":"Linkedin",
            "path":"https://www.linkedin.com/in/john-manhart/"
        }
    ],
    "casestudies": [
        {
            "id":"motion-animations",
            "title":"Motion Animations",
            "path": "/case-study/mobile-animations",
            "descriptionshort": "Lorem ipsum dolor amet xOXO aesthetic sriracha chartreuse, meditation celiac wayfarers banh mi bitters quinoa."
        },
        {
            "id":"mosey",
            "title":"Mosey",
            "path": "/case-study/mobile-animations",
            "descriptionshort":"Lorem ipsum dolor amet xOXO aesthetic sriracha chartreuse, meditation celiac wayfarers banh mi bitters quinoa."
        },
        {
            "id":"freebird",
            "title":"Freedbird",
            "path": "/case-study/mobile-animations",
            "descriptionshort":"Lorem ipsum dolor amet xOXO aesthetic sriracha chartreuse, meditation celiac wayfarers banh mi bitters quinoa."
        },
        {
            "id":"cobb",
            "title":"Cobb App",
            "path": "/case-study/mobile-animations",
            "descriptionshort":"Lorem ipsum dolor amet xOXO aesthetic sriracha chartreuse, meditation celiac wayfarers banh mi bitters quinoa."
        }
    ]
}



export default class Footer extends Component{
    render(){
        return(
          <div className="footer-container">
                <dl className="outro">
                    <div className="col left">
                        <dt>Case Studies</dt>
                        {footerData.casestudies.map((item, index) => {
                            return (
                            <Link key={index} to={item.path}>
                                <dd>{item.title}</dd> 
                            </Link>
                            )
                        })}
                    </div>
                    <div className="col center">
                        <dt>Writing</dt>
                                <dd>"How I keep UX tasks organized with Atom."</dd>
                                <dd>"How to customize Atom for your UX tasks.</dd>
                                <dd>Item 03</dd>
                    </div>
                    <div className="col right">
                        <dt>Social Media</dt>
                        {footerData.socialmedia.map((item, index) => {
                            return (
                            <a key={index} href={item.path}>
                                <dd>{item.title}</dd> 
                            </a>
                            )
                        })}
                    </div>
                </dl>
          </div>
        )
    }
}


