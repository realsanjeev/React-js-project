import React from "react";

export default function QuestionView(props) {
    
    const optionView = props.item.options.map((option, index) => {
        return (
            <div className="{props.``}" 
            key={index} 
            onClick={(event)=>props.handleAnswer(props.item.id, option)}
            >
                {option} 
            </div>
        )
    })
    return (
        <div className="container">
            Question
            <div>
                <p className="question">{props.item.question}</p>
                <div className="quiz-option">
                    {optionView}
                </div>
            </div>
        </div>
    )
}