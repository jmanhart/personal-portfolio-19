import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';

//Importing App Styles;
import './../../App.scss';

export default class ButtonBack extends Component{
    render(){
        return(
            <Link to={this.props.linkToPath}>
                <BackButtonWrapper className="button-back-wrapper">
                    <h5 className="internal-link">{this.props.buttonLabel}</h5>
                </BackButtonWrapper>
            </Link>
        )
    }
}

const BackButtonWrapper = styled('div')`
    position: fixed;
    left: 1.25em;
    top: 1.25em;
    cursor: pointer;
    z-index: 1001;
`;

