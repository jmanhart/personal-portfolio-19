import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Importing Local Styles
import './../../App.scss';
import './styles.scss';

export default class VerticalCard extends Component{
    render(){
        return(
            <div className="vertical-card">
                <Link to={this.props.pageLink}>
                    <div className="card-top"></div>
                    <div className="card-bottom">
                        <h5>{this.props.label}</h5>
                        <p>{this.props.description}</p>
                    </div>
                </Link>
            </div>
        )
    }
}