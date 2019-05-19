import React, { Component } from 'react';

// Importing Image assets
import photo from './../../images/me-blk-sun.jpg';

// import styles
import './../../App.scss';

// Importing Components
import ButtonBack from '../../components/buttons/button-back.js';

export default class Design extends Component{
    render(){
        return(
            <>
                <ButtonBack buttonLabel="Back" linkToPath="/" />
                <div className="container content" >

                    <h3 className="header-type-01">Font Stack</h3>
                    <code>'Work Sans', sans-serif</code>

                    <h3 className="header-type-01">Font Weights</h3>
                    <ul className="font-weights">
                        <li>Light</li>
                        <li>Regular</li>
                        <li>Medium</li>
                        <li>Bold</li>
                    </ul> 

                    <h3 className="header-type-01">Font Hierarchy</h3>
                    <ul className="font-size">
                        <li><h1>H1 - Lorem ipsum dolor amet sartorial taxidermy swag</h1></li>
                        <li><h2>H2 - Lorem ipsum dolor amet sartorial taxidermy swag, hot chicken actually slow-carb artisan.</h2></li>
                        <li><h3>H3 - Lorem ipsum dolor amet sartorial taxidermy swag, hot chicken actually slow-carb artisan.</h3></li>
                        <li><h4>H4 - Lorem ipsum dolor amet sartorial taxidermy swag, hot chicken actually slow-carb artisan.</h4></li>
                        <li><h5>H5 - Lorem ipsum dolor amet sartorial taxidermy swag, hot chicken actually slow-carb artisan.</h5></li>
                        <li><p>p - Lorem ipsum dolor amet sartorial taxidermy swag, hot chicken actually slow-carb artisan 3 wolf moon celiac man braid four loko before they sold out shabby chic. Knausgaard woke flannel prism hot chicken put a bird on it. Master cleanse lumbersexual messenger bag vexillologist. Echo park hot chicken neutra, cold-pressed sustainable leggings +1 tofu dreamcatcher. Disrupt stumptown gastropub locavore art party. Direct trade listicle selvge, gentrify tilde wolf ethical distillery. Dreamcatcher artisan activated charcoal.</p></li>
                    </ul>        

                    <h3 className="header-type-01">Layout Scale</h3>
                    <ul className="layout-scale">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul> 

                    <h3 className="header-type-01">Spacing Scale</h3>
                    <ul className="spacing-scale">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul> 


                    <h3 className="header-type-01">Buttons, Hovers, & More</h3>
                    <ul className="button-hovers-more">
                        <li><h2>This is an <span className="internal-link">internal link</span></h2></li>
                        <li><h5>This is an <span className="external-link">external link</span></h5></li>
                    </ul> 


                    <h3 className="header-type-01">Cards</h3>
                    <ul className="button-hovers-more">
                        <div className="card">
                            <div className="card-left"></div>
                            <div className="card-right">
                                <h4>Lorem ipsum dolor amet.</h4>
                                <p>Disrupt stumptown gastropub locavore art party. Direct trade listicle selvge.</p>
                                <p className="external-link">View Repo on Github</p>
                            </div>
                        </div>
                        
                        <div className="card-tall">
                            <div className="card-top"></div>
                            <div className="card-bottom">
                                <h4>Lorem ipsum dolor amet.</h4>
                                <p>Disrupt stumptown gastropub locavore art party. Direct trade listicle selvge.</p>
                                <p className="external-link">View Repo on Github</p>
                            </div>
                        </div>
                    </ul> 


                </div>
            </>
        )
    }
}
