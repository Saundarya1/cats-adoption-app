import React from "react";
import './question.scss';

function Question(props) {
    return (

        <div className="question-container">
            <div className="question-container_question">
                <p>{props.userQuestion}</p>
            </div>
            <div className="question-container_answers">
                <button value={true} onClick={props.handleNextStep}>{props.userAnswer1}</button>
                <button value={false}  onClick={props.handleNextStep}>{props.userAnswer2}</button>
            </div>
        </div >

    )
}

export default Question;