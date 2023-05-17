import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Meme from "./components/FormMeme";

import "./styles.css";

export default function App() {
    return (
        <div>
            <Header />
            <Meme />
            <Footer />
        </div>
    )
}