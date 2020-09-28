import React from 'react';


export default class NewCardInput extends React.Component {
    state = {
        question: '', answer: '',
        warningDisplay: "none",
    }


    handleQuestionChange = event => {
        this.setState({ question: event.target.value });
    }
    handleAnswerChange = event => {
        this.setState({ answer: event.target.value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log(this.props);
        const form = document.querySelector(".form");
        form.reset();

        if (this.state.question && this.state.answer) {
            this.props.addCard(this.state.question, this.state.answer);
            this.setState({ question: '', answer: '', warningDisplay: "none" });
        }
        else {
            this.setState({warningDisplay: "block"});
        }
        this.setState({ question: '' , answer: ''}); //so the user won't submit the same avatar multiple times

    }

    render() {
        return (
            <div>
                <form name="form" className="form" onSubmit={this.handleSubmit}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3>Question</h3>
                        <textarea name="question" rows="4" cols="50" onChange={this.handleQuestionChange}/>
                        <h3>Answer</h3>
                        <textarea name="answer" rows="4" cols="50" onChange={this.handleAnswerChange}/>
                        <button type="submit">Add Card</button>
                        <div style={{display: this.state.warningDisplay}}>Be sure to add both question and answer</div>
                    </div>
                </form>
            </div>
        )
    }


}

