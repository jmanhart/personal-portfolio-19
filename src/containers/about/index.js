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
                <div className="container page">
                    <h1>So just a little be about me eh</h1>
                    <h2>Tote bag live-edge vinyl, marfa four dollar toast meh polaroid fixie. Hashtag shaman marfa. </h2>
                    <p>Lorem ipsum dolor amet sartorial taxidermy swag, hot chicken actually slow-carb artisan 3 wolf moon celiac man braid four loko before they sold out shabby chic. Knausgaard woke flannel prism hot chicken put a bird on it. Master cleanse lumbersexual messenger bag vexillologist. Echo park hot chicken neutra, cold-pressed sustainable leggings +1 tofu dreamcatcher. Disrupt stumptown gastropub locavore art party.</p>

                    <h3 className="header-type-01">Timeline</h3>
                    <ul className="timeline">
                        <li>
                            <h5>2017 – Present</h5>
                            <h1>Garmin</h1>
                            <h3>UX Designer</h3>
                            <p>Working apart a large UX team with a focus on features for the vívo series of wearables Garmin Connect mobile application. Worked with a diverse team of business analysts, mobile developers (iOS & Android), QA, UX researchers, and platform designers.</p>
                        </li>
                        <li>
                            <h5>2016 – 2018</h5>
                            <h1>Mosey</h1>
                            <h3>UX Engineer</h3>
                            <p>Worked remotely for a small 4 person team to build a mobile application using react-native for rating and scoring resturants.</p>
                        </li>
                        <li>
                            <h5>2013 – 2017</h5>
                            <h1>Marlin</h1>
                            <h3>UX Developer & Designer</h3>
                            <p>A full service digital advertising agency. My role as UX Developer & Designer was to design than develop web and mobile applications. Worked apart teams for clients like Bush's Best Beans, Starbucks's, Unilever Food Service, Hellmann's, and French's.</p>
                        </li>
                        <li>
                            <h5>Class of 2013</h5>
                            <h1>Missouri State</h1>
                            <h3>Design & Illustration</h3>
                            <p>Dual major with an emphasis in Graphic Design and Illustration.</p>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
