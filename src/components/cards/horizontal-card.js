import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Importing Local Styles
import './../../App.scss';


export default class horizontalCard extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-left"></div>
                <div className="card-right">
                    <h4>{this.props.label}</h4>
                    <p>{this.props.description}</p>
                    <p className="external-link">{this.props.linkLabel}</p>
                </div>
            </div>
        );
    };
}


