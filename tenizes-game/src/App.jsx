import React, { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import Confetti from 'react-confetti'

import GameTitle from "./components/GameTitle";
import Die from "./components/Die";

import "./styles.css";

export default function App() {
  const [diceSequence, setDiceSequence] = useState(initialRoll());
  const [tenizes, setTenizes] = useState(false);

  useEffect(()=>{
    const notHeldDie = diceSequence.filter(die=>die.isHeld === false)
    const firstValue = diceSequence[0].value
    const notSameDie = diceSequence.filter(die=>die.value !== firstValue)
    notHeldDie.length === 0 && notSameDie.length===0
     ? setTenizes(true)
     : setTenizes(false)
  }, [diceSequence])

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
    setDiceSequence((prevSequence) => prevSequence.map((die)=> {
      return die.isHeld ? die: {...die, value: Math.ceil(Math.random()*6)}
    }));
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
      {tenizes && <h2 className="win">You win<Confetti/></h2>}
      
    </div>
    
  );
}
