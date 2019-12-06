import React from 'react';
import styled from 'react-emotion';


export default function BasicPage(props) {
    return (
        <BasicPageWrapper>
            {props.children}
        </BasicPageWrapper>
    );
}

const BasicPageWrapper = styled('div')`
    box-sizing: border-box;
    margin: 10em auto;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: null;
`
