import React, { Component } from "react";

import { Helmet } from "react-helmet";

// Importing in Routes
import Main from "./main.js";

// Importing in Components
// import AppFooter from './components/app-footer/index.js';
import Footer from "./components/footer/index.js";

// Importing in Styles
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Manhart</title>
          {/*  Google Analytics  */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-116824995-1"
          ></script>
          <script>
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-116824995-1');
                  `}
          </script>
        </Helmet>
        <Main />
      </div>
    );
  }
}
