import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

export default class App extends Component{
    render(){
        return(
          <div>
            <h1>WHY YOU NO WORK?</h1>
              {this.props.children}
          </div>
        )
    }
}
App.propTypes = propTypes;
