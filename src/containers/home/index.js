import React, { Component } from 'react';
import styled from 'react-emotion';

// Import styles
import './../../App.scss';

// Import Components
import HeaderHomeBlock from '../../components/block-header-home/';
import SocialMediaBlock from '../../components/block-social-media/';

export default class Home extends Component{
    render(){
        return(
          <div className="container page">
            <HeaderHomeBlock />
            <SocialMediaBlock />
          </div>
        )
    }
}
