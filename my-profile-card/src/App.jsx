import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

import "./styles.css";

export default function App() {
    return (
        <div className="main-container">
        <div className="container">
            <Profile />
            <Contact />
            <About />
        </div>
        </div>
    )
}