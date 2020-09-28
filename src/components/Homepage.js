import React from 'react';
import img from '../pictures/flashcards.png';


class HomePage extends React.Component {

    render() {
        return (
            <div>
                <h1 style={{textShadow: "0 0 3px #D8E6A8, 0 0 5px #D8E6A8"}}>Practice with flashcards</h1>
                <img src={img} alt={"flashcards"} style={{width:"450px"}}/>
            </div>
        )
    }
}

export default HomePage;