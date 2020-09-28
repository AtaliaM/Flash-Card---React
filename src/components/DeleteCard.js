import React from 'react';

class DeleteCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {id: props.id, buttonDisable: false};
    }

    deleteCurrentCard = () => {
        const idToDelete = this.state.id;
        console.log(`deleting card with id: ${idToDelete}`);
        this.setState({buttonDisable: true});
        this.props.deleteCard(idToDelete);
    }

    render() {
        return (
            <button onClick={this.deleteCurrentCard} disabled={this.state.buttonDisable} style={{display:"inline-block"}}>Delete</button>
        );
    }
}

export default DeleteCard;