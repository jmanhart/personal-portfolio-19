import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Importing Local Styles
import './button-styles.scss';

export default class ButtonBack extends Component{
    render(){
        return(
            <Link to={this.props.linkToPath}>
                <div className="button-back-wrapper">
                    <h3>{this.props.buttonLabel}</h3>
                </div>
            </Link>
        )
    }
}


