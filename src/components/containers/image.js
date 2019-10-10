import React from 'react';
import styled from 'react-emotion';


export default function ImageContainer(props) {
    return (
        <ImageContainerWrapper>
            {props.children}
        </ImageContainerWrapper>
    );
}

const ImageContainerWrapper = styled('div')`
    float: left;
    width: 90%;
    text-align: center;
    margin: 30px 5%;
    min-height: 100px;
    height: 30em;
    background-color: rgba(0,0,0,0.4);
    img {
        display: inline-block;
        width: auto;
        max-width: 100%;
    }
    @media only screen and (max-width: 980px){
        margin-left: 0;
        margin-right: 0;
        width: 100%!important;
    }
`;



