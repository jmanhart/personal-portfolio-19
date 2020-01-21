import React from "react";
import styled from "react-emotion";

// import styles
import "./../../App.scss";

// Importing Data
import data from "./../../data.js";

import BasicPage from "../../components/containers/BasicPageWrapper.js";
import BasicContainer from "../../components/containers/basic.js";
import PitchPointTable from "../../components/pitch/pitchTable.js";

const PitchPage = () => {
  return (
    <BasicPage>
      <BasicContainer>
        <h1>Buffalo Point Pitch</h1>
        <h2>
          A pitch varient forged over decades along the Great Buffalo River in
          Northern Arkansas.
        </h2>
      </BasicContainer>

      <BasicContainer>
        <PitchPointTable />
      </BasicContainer>

      <BasicContainer>
        <PitchList>
          <lh>
            <h3>Equipment:</h3>
          </lh>
          <li>Deck of cards 52 </li>
          <li>4 people</li>
          <li>Score pad</li>
        </PitchList>
        <PitchList>
          <lh>
            <h3>Dealing:</h3>
          </lh>
          <li>
            Pick a person at random to deal. Dealership proceeds clockwise after
            each hand.
          </li>
          <li>
            Lightly shuffle the cards and deal three (3) at a time to each
            player until each player has six (6) cards.
          </li>
          <li>Score pad</li>
        </PitchList>
      </BasicContainer>
      <BasicContainer>
        <PitchList>
          <lh>
            <h3>Resources:</h3>
          </lh>
          <li>
            <a href="https://poorworkingstiff.wordpress.com/2008/06/21/card-game-7-point-partnership-pitch/">
              7pt Partnership Pitch
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Pitch_(card_game)">
              Pitch Wiki
            </a>
          </li>
        </PitchList>
      </BasicContainer>
    </BasicPage>
  );
};

export default PitchPage;

const PitchTable = styled("div")`
  background: pink;
  border: 1px solid black;
`;
const PitchTableRow = styled("div")`
  background: red;
  border: 1px solid black;
  display: flex;
`;

const PitchTableCell = styled("div")`
  background: yellow;
  border: 1px solid black;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const PitchList = styled("ul")`
  li {
    list-style-type: disc;
    margin-left: 1em;
  }
`;

// <p>

// is a four player card game composed of two teams. The gameplay consists of multiple hands with the ultimate goal of reaching a score of 21 before the other team.

// The u working towards achieving the high score of 21

// Pitch is an American trick-taking card game derived from the English game of All Fours. Modern game involving a bidding phase and setting back a party's score if the bid is not reached came up in the middle of the 19th century and is more precisely known as Auction Pitch or Setback. Four can play individually or in fixed partnerships, depending in part on regional preferences.[2] Auction Pitch is played in numerous variations that vary the deck used, provide methods for improving players hands, or expand the scoring system. Some of these variants gave rise to a new game known as Pedro or Cinch.</p>
