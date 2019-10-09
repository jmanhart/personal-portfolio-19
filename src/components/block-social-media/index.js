import React from 'react';
import styled from 'react-emotion';

// Importing Data
import data from './../../data.js';

export default function SocialMediaBlock() {
    return(
        <SocialMedia>
            {data.socialmedia.map((item, index) => {
                return(
                    <li key={index}>
                        <h5>
                            <a href={item.path} className="external-link">{item.title}</a>
                        </h5>
                    </li>
                )
            })}
        </SocialMedia> 
    )
}

const SocialMedia = styled('div')`
    display: flex;
    li{
        padding-right: 1.5em;
    }
`;

