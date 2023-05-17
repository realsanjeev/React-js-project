import React from "react";

import Navbar from "./components/Navbar";
import Footbar from "./components/Footer";
import ArticleComponent from "./components/ArticleComponent";
import jounralDate from "./components/jounralData";

import "./styles.css";

export default function App() {
  const travelNotes = jounralDate.map((item) => (
    <ArticleComponent item={item} key={item.id} />
  ));

  return (
    <div>
      <Navbar />
      <div className="content-wrapper">{travelNotes}</div>

      <Footbar />
    </div>
  );
}
