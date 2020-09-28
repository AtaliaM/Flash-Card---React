import React from 'react';

const ManagaCard = (props) => {
    console.log(props);

    const style = {
        width: "400px",
        height: "300px",
        background: "plum",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      
    }
    
    return (
        <div className="card-container" >
            <div className="card" style={style}>
                <h4>{`Question: ${props.question}`}</h4>
                <h4>{`Answer: ${props.answer}`}</h4>
            </div>
        </div>
    );

}

export default ManagaCard;