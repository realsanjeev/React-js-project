import React from "react";
import linkedinLogo from "../images/linkedin-logo.png";
import twitterLogo from "../images/twitter.png";
import gitHubLogo from "../images/github.png";
import instagramLogo from "../images/instagram.png"

export default function  Contact (){
    return (
        <div className="contact">
            <ul className="social-contact">
            <li><a href="https://linkedin.com/in/realsanjeev"><img src={linkedinLogo} alt="Linkedin link" className="contact-logo"/></a></li>
            <li><a href="https://twitter.com/realsanjeev2"><img src={twitterLogo} alt="Twitter link" className="contact-logo"/></a></li>
            <li><a href="https://github.com/realsanjeev"><img src={gitHubLogo} alt="Gitub link" className="contact-logo"/></a></li>
            <li><a href="https://instagram.com/realsanjeev"><img src={instagramLogo} alt="Instagram link" className="contact-logo"/></a></li>
            </ul>
        </div>
    )
}