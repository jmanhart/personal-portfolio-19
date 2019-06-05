import React, { Component } from 'react';

//Importing Local Styles
import './../../App.scss';
import './styles.scss';

export default class HorizontalCard extends Component{
    render(){
        return(
            <>
            <div className="horizontal-card">
                <div className="card-left"></div>
                <div className="card-right">
                    <h4>{this.props.label}</h4>
                    <p>{this.props.description}</p>
                    <p className="external-link">{this.props.linkLabel}</p>
                </div>
            </div>
            </>
        )
    }
}