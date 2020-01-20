import React from 'react';
import styled from 'react-emotion';

// import styles
import './../../App.scss';

// Importing Data
// import data from './../../data.js';



const pitchPointData = {
    "pointsTable": [
        {
            "title":"Ace",
            "value":"1pt",
            "description": "This is the highest card"
        },
        {
            "title":"King",
            "value":"0pt",
            "description": "Some copy"
        },
        {
            "title":"Queen",
            "value":"0pt",
            "description": "Some copy"
        },
        {
            "title":"Jack of Suit",
            "value":"1pt",
            "description": "Some copy"
        },
        {
            "title":"Jack of Color",
            "value":"1pt",
            "description": "Some copy"
        },
        {
            "title":"Big Joker",
            "value":"1pt",
            "description": "Some copy"
        },
        {
            "title":"Little Joker",
            "value":"1pt",
            "description": "Some copy"
        },
        {
            "title":"10",
            "value":"1pt",
            "description": "Some copy"
        },
        {
            "title":"2",
            "value":"1pt",
            "description": "Some copy"
        }
    ]
}




const PitchPointTable = () => {

    return (
    
        <PitchTable>
            {pitchPointData.pointsTable.map((item, index) => {
                return(
                    <PitchTableRow key={index}>
                        <PitchTableCell><h3>{item.title}</h3></PitchTableCell>
                        <PitchTableCell><h3>{item.description}</h3></PitchTableCell>
                    </PitchTableRow>
                )
            })}
        </PitchTable>
    );
};

export default PitchPointTable;

const PitchTable = styled('div')`

`
const PitchTableRow = styled('div')`
    display: flex;
`

const PitchTableCell = styled('div')`
    border: 1px solid black;
    display: flex;
    flex: 1;
    justify-content: center;
`

const PitchList = styled('ul')`
    li{
        list-style-type: disc;
        margin-left:1em;    
    }
`;


// <li key={index}>
// <h5>
//     <a href={item.path} className="external-link">{item.title}</a>
// </h5>
// </li>