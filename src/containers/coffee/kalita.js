import React, { Component } from "react";

// import styles
import "./../../App.scss";

// Importing Components
import ButtonBack from "../../components/buttons/button-back.js";

export default class Kalita extends Component {
  render() {
    return (
      <>
        <ButtonBack buttonLabel="Back" linkToPath="/" />
        <div className="container content">
          <h1 className="header-type-01">Kalita Waveeee</h1>
        </div>
      </>
    );
  }
}
