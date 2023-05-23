import React from "react";

export default function Die(props) {
  // console.log(props)
    return (
<button className={`grid-item ${props.dieStatus.isHeld ? "select-btn" : ""}`} onClick={()=>props.holdDie(props.dieStatus.id)}>{props.dieStatus.value}</button>
    )
}