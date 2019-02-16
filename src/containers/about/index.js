import React, { Component } from 'react';

// Importing Image assets
import photo from './../../images/me-blk-sun.jpg';

// import styles
import './../../App.scss';

// Importing Components
import ButtonBack from '../../components/buttons/button-back.js';

export default class About extends Component{
    render(){
        return(
            <>
                <ButtonBack buttonLabel="Back" linkToPath="/" />
                <div className="container">
                    
                    <div id="header">
                        <h1>So just a little be about me eh</h1>
                    </div>
                    <div id="about">
                        <h2>Tote bag live-edge vinyl, marfa four dollar toast meh polaroid fixie. Hashtag shaman marfa. </h2>
                        <h3> deep v pork belly +1 everyday carry air plant church-key adaptogen chicharrones lo-fi umami. Vexillologist cold-pressed green juice. Lorem ipsum dolor amet vice banh mi aesthetic authentic, small batch truffaut farm-to-table sriracha squid post-ironic actually af. Chambray direct trade meditation fixie 3.</h3>
                        <br/>
                    </div>
                    <div id="about">
                    <p>Lorem ipsum dolor amet sartorial taxidermy swag, hot chicken actually slow-carb artisan 3 wolf moon celiac man braid four loko before they sold out shabby chic. Knausgaard woke flannel prism hot chicken put a bird on it. Master cleanse lumbersexual messenger bag vexillologist. Echo park hot chicken neutra, cold-pressed sustainable leggings +1 tofu dreamcatcher. Disrupt stumptown gastropub locavore art party.

                    Direct trade listicle selvge, gentrify tilde wolf ethical distillery. Dreamcatcher artisan activated charcoal disrupt church-key, stumptown fashion axe street art. Letterpress salvia trust fund semiotics four loko. Celiac keytar leggings polaroid copper mug, fixie chambray pour-over hell of photo booth. Wolf hashtag truffaut kinfolk art party banjo. Leggings iceland poke hot chicken, lumbersexual pok pok sartorial trust fund mixtape helvetica crucifix la croix umami.

                    Authentic hell of mixtape thundercats, readymade tofu tattooed brooklyn. Retro seitan glossier wayfarers keffiyeh narwhal hoodie tousled vexillologist shaman poutine gochujang forage readymade. Kombucha blog hexagon squid shoreditch thundercats beard single-origin coffee keytar butcher polaroid. Tattooed food truck squid beard microdosing humblebrag brunch XOXO 8-bit keffiyeh cornhole.</p>
                    </div>
                </div>
            </>
        )
    }
}
