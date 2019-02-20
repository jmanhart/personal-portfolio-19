import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Importing Local Styles
import './styles.scss';

const footerData = [
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
]



export default class AppFooter extends Component{
    render(){
        return(
          <div className="container">
                <dl className="outro">
                    <div className="col left">
                        <dt>Case Studies</dt>
                            <dd>Project Lottie</dd>
                            <dd>Mosey</dd>
                            <dd>Freebird</dd>
                            <dd>Cobb Connection</dd>
                    </div>
                    <div className="col center">
                        <dt>Writing</dt>
                                <dd>"How I keep UX tasks organized with Atom."</dd>
                                <dd>"How to customize Atom for your UX tasks.</dd>
                                <dd>Item 0333</dd>
                    </div>
                    <div className="col right">
                        <dt>Social Media</dt>
                        {footerData.map((item, index) => {
                            return (
                            <Link key={index} to={item.path}>
                                <h3>{item.title}</h3> 
                            </Link>
                            )
                        })}
                    </div>
                </dl>
          </div>
        )
    }
}


