import React from 'react';
import styled from 'react-emotion';

export default function SocialMediaBlock() {
    return(
        <SocialMedia>
            <li><h5><a href="https://github.com/jmanhart" className="external-link">Github</a></h5></li>
            <li><h5><a href="https://twitter.com/JohnManhart" className="external-link">Twitter</a></h5></li>
            <li><h5><a href="https://www.linkedin.com/in/john-manhart/" className="external-link">Linkedin</a></h5></li>
            <li><h5><a href="https://medium.com/@JohnManhart" className="external-link">Medium</a></h5></li>
        </SocialMedia> 
    )
}

const SocialMedia = styled('div')`
    display: flex;
    li{
        padding-right: 1.5em;
    }
`;