import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Importing Local Styles
import './../../App.scss';
import './styles.scss';

export default class VerticalCard extends Component{
    render(){
        return(
            <Link to={this.props.pageLink}>
                <div className="vertical-card">
                    <div className="card-top"></div>
                    <div className="card-bottom">
                        <h4>{this.props.label}</h4>
                        <p>{this.props.description}</p>
                        <p className="external-link">{this.props.pageLink}</p>
                    </div>
                </div>
            </Link>
        )
    }
}