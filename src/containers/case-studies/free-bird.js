import React, { Component } from 'react';

// import Global Styles
import './../../App.scss';

// Import Local Styles
import './styles.scss';

// Importing Data
import data from './../../data.js'

// Importing Components
import ButtonBack from '../../components/buttons/button-back';

// Temp fix untill a better solution :-D
// This is the position within the data array!
const arrOrder = 2

export default class FreeBird extends Component{
    render(){
        return(
            <>
            <ButtonBack buttonLabel="Back" linkToPath="/" />
                <div className="container">
                    <div id="header">
                        <h1>{data.casestudies[arrOrder].title}</h1>
                        <h2>{data.casestudies[arrOrder].descriptionshort}</h2>
                        <h3>{data.casestudies[arrOrder].details}</h3>
                    </div>
                </div>
                <div className="full-image top">
           
                </div>
                <div className="container">
                    <div id="about">
                        <p>Lorem ipsum dolor amet sartorial taxidermy swag, hot chicken actually slow-carb artisan 3 wolf moon celiac man braid four loko before they sold out shabby chic. Knausgaard woke flannel prism hot chicken put a bird on it. Master cleanse lumbersexual messenger bag vexillologist. Echo park hot chicken neutra, cold-pressed sustainable leggings +1 tofu dreamcatcher. Disrupt stumptown gastropub locavore art party.
                        </p>
                        <p>Direct trade listicle selvge, gentrify tilde wolf ethical distillery. Dreamcatcher artisan activated charcoal disrupt church-key, stumptown fashion axe street art. Letterpress salvia trust fund semiotics four loko. Celiac keytar leggings polaroid copper mug, fixie chambray pour-over hell of photo booth. Wolf hashtag truffaut kinfolk art party banjo. Leggings iceland poke hot chicken, lumbersexual pok pok sartorial trust fund mixtape helvetica crucifix la croix umami.
                        </p>
                        <p>Authentic hell of mixtape thundercats, readymade tofu tattooed brooklyn. Retro seitan glossier wayfarers keffiyeh narwhal hoodie tousled vexillologist shaman poutine gochujang forage readymade. Kombucha blog hexagon squid shoreditch thundercats beard single-origin coffee keytar butcher polaroid. Tattooed food truck squid beard microdosing humblebrag brunch XOXO 8-bit keffiyeh cornhole.
                        </p>
                    </div>
                    <div className="image">

                    </div>
                </div>


            </>
          
        )
    }
}
