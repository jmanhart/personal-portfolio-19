import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Importing Local Styles
import './styles.scss';

// Importing Data
import data from './../../data.js'


export default class Footer extends Component{
    render(){
        return(
          <div className="footer-container">
                <dl className="outro">
                    <div className="col left">
                        <dt>Case Studies</dt>
                        {data.casestudies.map((item, index) => {
                            return (
                            <Link key={index} to={item.path}>
                                <dd>{item.title}</dd> 
                            </Link>
                            )
                        })}
                    </div>
                    <div className="col center">
                    <dt>Writing</dt>
                    {data.writing.map((item, index) => {
                            return (
                            <a key={index} href={item.path}>
                                <dd>{item.title}</dd> 
                            </a>
                            )
                        })}
                    </div>
                    <div className="col right">
                        <dt>Social Media</dt>
                        {data.socialmedia.map((item, index) => {
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


