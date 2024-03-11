import React from "react";
import "./About.css";
import Services from "../Services/Services";

export default function () {
  return (
    <>
      <div className="about-head">
        <span className="about-head about-hover">About Me</span>
      </div>
      <div className="About">
        <div className="about-hero">
          <img
            src={"./assets/images/Krishna_Verma_pic5.jpeg"}
            alt=""
            className="about-hover"
          />
        </div>
        <div className="about-personal">
          <div className="about-para">
            <p className="about-para-p">Hi, Iam</p>
            <p className="about-para-p">Krishna Verma</p>
            <p className="about-para-p">
              And i am React.Js Developer and Node.js Enthusiast.
            </p>
            <p className="about-para-p">
               I am proficient in the MERN stack
              emerge as dynamic and sought-after professionals in the realm of
              web development. Armed with a deep understanding of MongoDB for
              flexible data storage, Express.js for robust server-side
              development, React.js for interactive user interfaces, and Node.js
              for scalable server applications, these students possess a
              holistic skill set crucial for full-stack development.
            </p>
          </div>
        </div>
      </div>
      <Services />
    </>
  );
}
