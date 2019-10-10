import React from 'react';
import styled from 'react-emotion';


export default function BasicContainer(props) {
    return (
        <BasicContainerWrapper>
            {props.children}
        </BasicContainerWrapper>
    );
}

const BasicContainerWrapper = styled('div')`
    margin: 0px auto;
    width: 850px;
    position: relative;
    display: flex;
    flex-direction: column;
`;




{/*
import React, { Component } from 'react';
import styled from 'react-emotion';

export default class BasicContainer extends Component{
    render(){
        return(
            <BasicContainerWrapper>
                {this.props.children}
            </BasicContainerWrapper>
        )
    }
}

const BasicContainerWrapper = styled('div')`
    margin: 0px auto;
    width: 850px;
    position: relative;
    display: flex;
    flex-direction: column;
`;
*/}