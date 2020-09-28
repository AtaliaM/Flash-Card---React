import React from 'react';
import ManageCard from './ManageCard';
import DeleteCard from './DeleteCard';
import UpdateCard from './UpdateCard';

const MappingData = (props) => {
    const flashcards = props.flashcards;
    console.log(flashcards);
    return (
        <>
            {flashcards.map((singleData) => {
                return (
                    <div key={singleData.id}>
                        <ManageCard question={singleData.question} answer={singleData.answer}/>
                        <DeleteCard deleteCard = {props.deleteCard} id={singleData.id}/>
                        <UpdateCard updateCard = {props.updateCard} id={singleData.id}/>
                    </div>
                );
            })}
        </>
    );
}

export default MappingData;