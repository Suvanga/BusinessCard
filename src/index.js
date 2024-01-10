import React from "react";
import ReactDOM from "react-dom";
import TopImage from "./Top";
import emailp from "../src/images/Mail.svg";
import linkedinp from "../src/images/linkedin.svg";
import './styles.css'; 
import SocialMediaIcons from "./social";
import Snowfall from "./Snowfall"; 
import ResumeButton from"./buttons"

function Body(){
    return(
        <div className="all">
            <p className="name">Suvanga Dhakal</p>
            <p className="Intro">Full Stack Developer</p>
            <div className="buttons">
                <a className="emails" href="mailto:suvangadhakal0@gmail.com">
                    <img src={emailp} className="emlogo" alt="welcome-image" />
                    Email
                </a>
                <a className="linked" href="https://www.linkedin.com/in/sdhakal8/">
                    <img src={linkedinp} className="linkedin" alt="welcome-image" />
                    Linkedin
                </a>
            </div>
            <h2>About</h2>
            <p className="about">
                A Junior Computer Science and Engineering student at the University of Toledo, I love playing guitar and singing. 
            </p>
            <h2>Interests</h2>
            <p className="Interests">Food expert. Reader. Internet fanatic. Travel geek. Hot Chocolate-fanatic.</p>
            <ResumeButton/>
            <SocialMediaIcons />
        </div>
    );
}



ReactDOM.render(
    <div className="all total" id="all-it">
          <Snowfall />
          <div className="newbody">
            <TopImage />
            <Body />
          </div>
        
    </div>,
    document.getElementById("root")
);
