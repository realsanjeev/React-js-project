import React from "react";
import Confetti from 'react-confetti'

export default function Result(props) {
    return (
    <div className="main-container">
        <h1>Congragulation For finishing Quiz Challenge!!</h1>
        <h2>Your Final Score is: {props.score*10} out of 100</h2>
        <Confetti/>
        <button className="submit btn" onClick={props.handleRequiz}>
            Go back to quiz
        </button>
    </div>
    )
}
