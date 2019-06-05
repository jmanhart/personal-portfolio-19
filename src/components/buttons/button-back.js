import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Importing Local Styles
import './button-styles.scss';

//Importing App Styles;
import './../../App.scss';

export default class ButtonBack extends Component{
    render(){
        return(
            <Link to={this.props.linkToPath}>
                <div className="button-back-wrapper">
                    <h5 className="internal-link">{this.props.buttonLabel}</h5>
                </div>
            </Link>
        )
    }
}


