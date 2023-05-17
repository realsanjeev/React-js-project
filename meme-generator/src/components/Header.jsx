import React from "react";
import memeLogo from "../images/meme-logo.png";

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-title">
                <img src={memeLogo} alt="Meme Generator logo" className="header-image"/>
                <h3>Meme Generator</h3>
            </div>
            <h4 className="project-info">React Project - 3</h4>
        </div>
    )
}