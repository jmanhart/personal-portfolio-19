import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Importing Local Styles
import './styles.scss';

export default class Footer extends Component{
    render(){
        return(
          <div className="footer-container">
                <dl className="outro">
                    <div className="col left">
                        <dt>Case Studies</dt>
                            <Link to="/case-study/garmin/lottie"><dd>Project Lottie</dd></Link>
                            <dd>Mosey</dd>
                            <dd>Freebird</dd>
                            <dd>Cobb Connection</dd>
                    </div>
                    <div className="col center">
                        <dt>Writing</dt>
                                <dd>"How I keep UX tasks organized with Atom."</dd>
                                <dd>"How to customize Atom for your UX tasks.</dd>
                                <dd>Item 03</dd>
                    </div>
                    <div className="col right">
                        <dt>Social Media</dt>
                                <dd>Github</dd>
                                <dd>Dribbble</dd>
                                <dd>Twitter</dd>
                                <dd>Letterboxd</dd>
                                <dd>Medium</dd>
                                <dd>Linkedin</dd>
                    </div>
                </dl>
          </div>
        )
    }
}


