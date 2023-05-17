import React from "react";
import myProfile from "../images/myprofile.jpg"

export default function Profile () {
    return (
        <div className="profile">
        <img src={myProfile} alt="Card Profile" className="profile-pic"/>
        <h1>SANJEEV BHANDARI</h1>
        </div>
    )
}