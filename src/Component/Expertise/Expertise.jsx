import React from "react";
import "./Expertise.css";

export default function Expertise() {
  return (
    <>
      <div className="expertise-header ">
        <span className="expert-hover">My Expertise</span>
      </div>
      <div className="expertise-container ">
        <div className="expertise-para">
          <p className="expertise-para-content expert-hover2">
            I Love These Technologies
          </p>
          <p className="expertise-para-p2 expert-hover2">
            I have a strong background in web development, specifically focusing
            on HTML5/CSS3 and JavaScript. My proficiency extends to frontend and backend both I
            have extensive experience tech Stacks :- Mongodb,Express.js,React.js,Node.js,Javascript,C++
          </p>
        </div>
        <div className="skill">
          <ul className="section-skill">
            <li>Javascript</li>
            <li>C++</li>
          </ul>
          <ul className="section-skill">
            <li>Mongodb</li>
            <li>MySQL</li>
          </ul>
          <ul className="section-skill">
            <li>Express.js</li>
            <li>Node.js</li>
          </ul>
          <ul className="section-skill">
            <li>React.js</li>
            <li>Bootstrap</li>
          </ul>
          <ul className="section-skill">
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </>
  );
}
