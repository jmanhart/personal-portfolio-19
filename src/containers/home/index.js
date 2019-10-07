import React, { Component } from 'react';
import styled from 'react-emotion';

// Import styles
import './../../App.scss';

// Import Components
import ExampleII from '../../components/test.js';

export default class Home extends Component{
    render(){
        return(
          <div className="container page">
            <ExampleII />
            <SocialMedia className="">
                <li><h5><a href="https://github.com/jmanhart" className="external-link">Github</a></h5></li>
                <li><h5><a href="https://twitter.com/JohnManhart" className="external-link">Twitter</a></h5></li>
                <li><h5><a href="https://www.linkedin.com/in/john-manhart/" className="external-link">Linkedin</a></h5></li>
                <li><h5><a href="https://medium.com/@JohnManhart" className="external-link">Medium</a></h5></li>
            </SocialMedia> 
          </div>
        )
    }
}

const Header = styled('span')`
    padding: ${p => p.theme.spacing[4]};
    font-size: ${p => p.theme.type.size[2]};
    font-weight: ${p => p.theme.type.weight[0]};
    color: ${p => p.theme.gray[5]};
    font-family: ${p =>p.theme.type.family.sans};
`;


const SocialMedia = styled('div')`
    display: flex;
    li{
        padding-right: 1.5em;
    }

`;