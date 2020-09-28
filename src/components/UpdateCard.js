import React from 'react';

class UpdateCard extends React.Component {

    state = {
        id: this.props.id,
        question: this.props.question,
        answer: this.props.answer,
    }


    handleQuestionChange = event => {
        if (event.target.value !== "") {
            this.setState({ question: event.target.value });
        }
    }
   
    handleAnswerChange = event => {
        if (event.target.value !== "") {
            this.setState({ answer: event.target.value });
        }
    }
   

    updateCurrentCard = () => {
        const form = document.querySelector(`.form${this.state.id}`);
        form.style.display = "block";
        const idToUpdate = this.state.id;
        console.log(`updating card with id: ${idToUpdate}`);

    }

    handleSubmit = async event => {
        event.preventDefault();
        const form = document.querySelector(`.form${this.state.id}`);
        const warning = document.querySelector(`.updateWarning${this.state.id}`);
        warning.style.display = "none";

        
        if (this.state.question && this.state.answer) {

            this.props.updateCard(this.state.question, this.state.answer, this.state.id);
            form.style.display = "none";
        }
        else if (this.state.question || this.state.answer) {
            warning.style.display = "block";
        }
        else {
            form.style.display = "none";
        }
        
    }

    render() {
        return (
            <div style={{display: "inline-block"}}>
                <button onClick={this.updateCurrentCard}>Update</button>
                <form style={{ display: "none" }} name="form" className={`form${this.state.id}`} onSubmit={this.handleSubmit}>
                    <label style={{ margin: "0 5px", display: "block" }}>
                        Update Question:
              <textarea style={{ margin: "0 5px" }} type="text" name="name" onChange={this.handleQuestionChange} />
                    </label>
                    <label style={{ margin: "0 5px", display: "block" }}>
                        Update Answer:
              <textarea style={{ margin: "0 5px" }} type="text" age="age" onChange={this.handleAnswerChange} />
                    </label>
                  
                    <button type="submit">Update Card</button>
                    <h5 className={`updateWarning${this.state.id}`} style={{ display: "none" }}>Be sure to enter both question and answer</h5>
                </form>
            </div>
        );
    }
}

export default UpdateCard;