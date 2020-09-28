import React from 'react';
import mock from '../api/mock';
import MappingCards from './MappingCards';
import NewCardInput from './NewCardInput';

class CardsManager extends React.Component {

    state = { flashcards: []}

    async componentDidMount() {
        const response = await mock.get('/flashCards');
        this.setState({ flashcards: response.data });
        console.log(this.state.flashcards);

    }

    deleteCard = async (currentIdToDelete) => {
        console.log(currentIdToDelete);
        await mock.delete(`/flashCards/${currentIdToDelete}`);
    
        const updatedData = this.state.flashcards.filter(obj => {
          return obj.id !== currentIdToDelete;
        })
        console.log(updatedData);
        this.setState({ flashcards: updatedData });
      }
    
      createCard = async (question,answer) => {
        const newCard = {question: question, answer: answer};
        const response = await mock.post(`/flashCards/`, newCard);
        console.log(response.data);
        const updatedData = this.state.flashcards;
        updatedData.push(response.data);
        this.setState({flashcards:updatedData});
      }
    
      updateCard = async (question, answer, id) => {
        console.log("in update card");
        let updatedCard = {question:question, answer:answer, id:id}; 
        // console.log(updatedCard);
    
        await mock.put(`/flashCards/${id}`, updatedCard);
        
        for(let i=0; i<this.state.flashcards.length; i++) {
          if (this.state.flashcards[i].id === id) {
            console.log("this is the id!");
            this.state.flashcards[i] = updatedCard;
            console.log(this.state.flashcards[i]);
            break;
          }
        }
    
        const updatedData = this.state.flashcards;
        this.setState({flashcards: updatedData});
      }

    render() {
        if (this.state.flashcards.length !== 0) {
            return (
                <div>
                    <h2 style={{textDecoration: "underline"}}>Cards Manager</h2>
                    <NewCardInput addCard={this.createCard}/>
                    <MappingCards  flashcards={this.state.flashcards} deleteCard = {this.deleteCard} updateCard= {this.updateCard}/>
                </div>
            )
        }
        else {
            return (
                <div>Loading...</div>
            )
        }
    }
}

export default CardsManager;