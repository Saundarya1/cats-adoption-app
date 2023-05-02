import React from "react";
import './question.scss';

function Question(props) {
    return (

        <div className="question-container">
            <div className="question-container_question">
                <p>{props.userQuestion}</p>
            </div>
            <div className="question-container_answers">
                <button id="yes" onClick={props.handleNextStep}>{props.userAnswer1}</button>
                <button id="no"  onClick={props.handleNextStep}>{props.userAnswer2}</button>
            </div>
        </div >

    )
}

export default Question;