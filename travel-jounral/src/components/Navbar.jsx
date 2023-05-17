import React from "react";
import journalLogo from "../images/travel-journal-logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-title">
        <img src={journalLogo} alt="Travel journal logo" className="nav-img" />
        <h2>Travel Journal</h2>
      </div>
      <div className="author">- By Real Sanjeev</div>
    </nav>
  );
}
