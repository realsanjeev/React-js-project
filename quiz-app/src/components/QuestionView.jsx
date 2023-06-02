import React from "react";

export default function QuestionView(props) {
    
    const optionView = props.item.options.map((option, index) => {
        const userAnswer = props.userAns;
        var isChecked = false;
        var check = null;
        for (let i=0; i<userAnswer.length; i++){
            if (props.item.id === userAnswer[i].id) {
                isChecked = true;
                check = userAnswer[i].choice;
                console.log(isChecked, check, userAnswer);
            }
        }
        return (
            <div 
                key={index} 
                onClick={(event)=>props.handleAnswer(props.item.id, option)}
            >
                <div className={isChecked && check===option ? "checked-ans": ""}>{option}</div>
            </div>
        )
    })
    return (
        <div className="container">
            <div>
                <p className="question">{props.item.question}</p>
                <div className="quiz-option">
                    {optionView}
                </div>
            </div>
        </div>
    )
}