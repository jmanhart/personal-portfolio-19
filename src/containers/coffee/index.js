import React, { Component } from "react";

// import styles
import "./../../App.scss";

// Importing Components
import ButtonBack from "../../components/buttons/button-back.js";
import HorizontalCard from "../../components/cards/horizontal-card.js";

export default class Coffee extends Component {
  render() {
    return (
      <>
        <ButtonBack buttonLabel="Back" linkToPath="/" />
        <div className="container content">
          {/* Font Family */}
          <h1 className="header-type-01">Coffee</h1>

          {/* Recipe Cards */}
          <div className="layout-grid-rows">
            <HorizontalCard
              label="Kalita Wave"
              description="Awesome single cup brewer that will melt your face!"
              linkLabel="View Recipe"
            />
          </div>
        </div>
      </>
    );
  }
}
