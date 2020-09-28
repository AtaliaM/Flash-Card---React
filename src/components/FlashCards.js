import React from 'react';
import mock from '../api/mock';
import CreateCard from './CreateCard';

class FlashCards extends React.Component {

    state = {
        flashcards: [], fleshcardsShuffled: [], answerDisplay: "none", questionDisplay: "flex",
        completed: false,
        buttonDisable: false,
        checkAnswerDiv: "none",
        numQuestions : 0,
        rightAnswers: 0,
       
    }

    async componentDidMount() {
        const response = await mock.get('/flashCards');
        this.setState({ flashcards: response.data, numQuestions: response.data.length });
        this.shuffleCards(this.state.flashcards); // 

    }

    shuffleCards = (cardsArr) => {
        const tempFleshCards = [...cardsArr]; 
        let j, x, i;
        for (i = tempFleshCards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = tempFleshCards[i];
            tempFleshCards[i] = tempFleshCards[j];
            tempFleshCards[j] = x;
        }
        this.setState({fleshcardsShuffled: tempFleshCards, completed: false, buttonDisable: false, rightAnswers: 0});
        
    }

    showCard = () => {
        if (this.state.fleshcardsShuffled.length > 0) {
            console.log("card");
            return (
                <CreateCard info={this.state.fleshcardsShuffled[0]}
                    frontDisplay={this.state.questionDisplay} backDisplay={this.state.answerDisplay} />
            )
        }
        else {
            console.log("no more cards");
            console.log(this.state.fleshcardsShuffled.length);
            return (
                <div>Completed</div>
            )
        }
    }


    flipCard = () => {
        this.setState({ answerDisplay: "flex", questionDisplay: "none", checkAnswerDiv: "flex" });
    }

    incrementRightAnswers = async () => {
        const rightAnswers = this.state.rightAnswers;
        const shuffleCards = [...this.state.fleshcardsShuffled];
        await shuffleCards.shift();
        console.log(`cards after shift: ${shuffleCards}`);
        this.setState({fleshcardsShuffled: shuffleCards, rightAnswers: rightAnswers+1, checkAnswerDiv: "none"});
        console.log(this.state.fleshcardsShuffled.length);
        console.log(shuffleCards.length);

        if ((shuffleCards.length) >= 1) {
            this.setState({ answerDisplay: "none", questionDisplay: "flex"});
        }
        else  {
            this.setState({buttonDisable: true, completed: true, answerDisplay: "none", questionDisplay: "flex"});
            console.log(this.state.completed);
        }
    }

    moveCardToArrayEnd = () => {
        const flashcards = [...this.state.fleshcardsShuffled];
        const currentCard = this.state.fleshcardsShuffled[0];
        flashcards.shift();
        flashcards.push(currentCard);
        console.log(flashcards);
        this.setState({fleshcardsShuffled: flashcards, checkAnswerDiv: "none", answerDisplay: "none", questionDisplay: "flex"});
    }

    checkIfCompleted = () => {
        if (this.state.completed) {
            console.log("completeee");
            const cards = this.state.flashcards;
            return (
                <div>
                   <i class="fas fa-award"></i> You're awesome! <i class="fas fa-award"></i>
                    <button onClick={()=>this.shuffleCards(cards)}>Reshuffle again</button>
                </div>
            )
        }
    }



    render() {
        if (this.state.fleshcardsShuffled.length !== 0 || this.state.completed) {
            return (
                <>
                    <h2 style={{margin:"10px", textShadow: "0 0 3px #D8E6A8, 0 0 5px #D8E6A8"}}>Practice your skills <i class="far fa-smile"></i></h2>
                    {/* <CreateCard info={this.state.fleshcardsShuffled[0]}
                        frontDisplay={this.state.questionDisplay} backDisplay={this.state.answerDisplay} /> */}
                        {this.showCard()}
                    <div className="buttons-container" style={{display:"flex"}}>
                        <button disabled={this.state.buttonDisable}
                            onClick={this.moveCardToArrayEnd}>New Card</button>
                        <button disabled={this.state.buttonDisable} 
                        onClick={this.flipCard}>Reveal Answer</button>
                    </div>
                    <div className="answer-verify" style={{display: this.state.checkAnswerDiv}}>
                        <h3>Did you answer it right?</h3>
                        <button onClick = {this.incrementRightAnswers}>yes</button>
                        <button onClick = {this.moveCardToArrayEnd}>no</button>
                    </div>
                    <div>{`Completed ${this.state.rightAnswers} out of ${this.state.numQuestions}`}</div>
                    {this.checkIfCompleted()}
                </>
            )
        }
        else {
            return <></>
        }
    }
}

export default FlashCards;