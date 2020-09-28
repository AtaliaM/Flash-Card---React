import React from 'react';
import './CreateCard.css';

const CreateCard = (props) => {

    const frontDisplay = props.frontDisplay;
    const backDisplay = props.backDisplay;

    const frontStyle = {
        width: "400px",
        height: "300px",
        background: "#A079B4",
        display: frontDisplay,
        alignItems: "center",
        justifyContent: "center",
      

    }
    const backStyle = {
        width: "400px",
        height: "300px",
        backgroundColor: "#537FB8",
        color: "black",
        display: backDisplay,
        alignItems: "center",
        justifyContent: "center",
    
    }


    return (
        <div className="card-container" >
            <div className="card">
                <div className="flip-card-front" style={frontStyle}>
                    <h1>{props.info.question}</h1>
                </div>
                <div className="flip-card-back" style={backStyle}>
                    <h1>{props.info.answer}</h1>
                </div>
            </div>
        </div>
    );

}

export default CreateCard;

