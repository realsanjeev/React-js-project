import React, { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import Confetti from 'react-confetti'

import GameTitle from "./components/GameTitle";
import Die from "./components/Die";

import "./styles.css";

export default function App() {
  const [diceSequence, setDiceSequence] = useState(initialRoll);
  const [countRoll, setCountRoll] = useState(0);
  const [bestScore, setBestScore] = useState(Number(localStorage.getItem("bestScore")) || Infinity);
  const [tenizes, setTenizes] = useState(false);
  
  useEffect(() => {
    const notHeldDie = diceSequence.filter((die) => !die.isHeld);
    const firstValue = diceSequence[0].value;
    const notSameDie = diceSequence.filter((die) => die.value !== firstValue);
    const isTenizes = notHeldDie.length === 0 && notSameDie.length === 0;
    setTenizes(isTenizes);
  }, [diceSequence]);
  
  useEffect(() => {
    if (tenizes) {
      setBestScore((prevBestScore) => {
        return countRoll < prevBestScore ? countRoll : prevBestScore;
      });
    }
  }, [tenizes, countRoll]);
  


  // ramdomly generate dice number between 0 to 6
  function initialRoll() {
    const initDie = Array.from({ length: 10 }, () =>
      Math.ceil(Math.random() * 6)
    );
    const dieWithStatus = initDie.map((die) => {
      return { 
        value: die, 
        isHeld: false, 
        id: nanoid(),
      }
    });
    return dieWithStatus;
  }

  const dieMapper = diceSequence.map((item) => {
    return <Die dieStatus={item} key={item.id} holdDie={holdDie}/>;
  });

  function rollEffect() {
    if (!tenizes){
      setCountRoll(prevCount=>prevCount+1)
      setDiceSequence((prevSequence) => prevSequence.map((die)=> {
        return die.isHeld ? die: {...die, value: Math.ceil(Math.random()*6)}
      }));
    } else {
      setDiceSequence(initialRoll())
      setTenizes(false)
      setCountRoll(0)
    }
    
  }

  function holdDie(id) {
    setDiceSequence((prevSequence) => prevSequence.map((die)=> {
      return die.id===id ? {...die, isHeld: !die.isHeld} : die
    }));
  }

  
  return (
    <div className="main">
      <GameTitle />
      <div className="grid-container">
        {dieMapper}
      </div>
      <div className="container">
      <button className="roll-die" 
              onClick={rollEffect}>
        {tenizes ? "New Game" : "Roll"}

      </button>
      
      </div>
      {tenizes && 
      <div>
      <Confetti/>
        <h2 className="win">You win</h2>
        <h3>Total Roll: {countRoll}</h3>
        <h3>Best Score: {bestScore}</h3>
      </div>}
      
    </div>
    
  );
}
