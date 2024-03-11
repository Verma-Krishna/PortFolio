import React from "react";
import "./Services.css";
import Expertise from "../Expertise/Expertise";

export default function Services() {
  return (
    <>
      <div className="services-head">
        <span className="service-hover">My Services</span>
      </div>
      <div className="content-services">
        <div className="service-box-1 combine-box">
          <div className="box-icons">
            <span>
              <img
                src="./assets/images/MERN.png"
                alt=""
                width={75}
                className="service-hover box1-pic"
              />
            </span>
          </div>
          <div className="box-1-head service-hover">
            <span>MERN Stack Development </span>
          </div>
          <div className="box-para">
            <p>
              MERN stack provides a cohesive and end-to-end solution for
              developing modern web applications, where MongoDB stores data,
              Express.js handles server-side logic, React.js manages the
              frontend user interface, and Node.js ties everything together as
              the runtime environment. This stack is widely adopted for its
              flexibility, scalability, and ease of use in building feature-rich
              and performant applications.
            </p>
          </div>
        </div>
        <div className="service-box-2 combine-box">
          <div className="box-icons">
            <span>
              <img
                src="./assets/images/react.png"
                alt=""
                width={85}
                height={85}
                className="service-hover box2-pic"
              />
            </span>
            <span>
              <img
                src="./assets/images/redux.png"
                alt=""
                width={70}
                height={75}
                className="service-hover box2-pic"
                style={{ marginLeft: "20px" }}
              />
            </span>
          </div>
          <div className="box-2-head service-hover">
            <span>Frontend Development </span>
          </div>
          <div className="box-para">
            <p>
              Frontend development with React and Redux Saga is a powerful
              combination for building modern and scalable web applications.
              React is a JavaScript library for building user interfaces, and
              Redux Saga is a middleware library for handling side effects in
              Redux applications.
            </p>
          </div>
        </div>
        <div className="service-box-3 combine-box">
          <div className="box-icons">
            <span>
              <img
                src="./assets/images/node-js.png"
                alt=""
                width={100}
                height={100}
                className="service-hover  box3-pic"
              />
            </span>
            <span>
              <img
                src="./assets/images/mongodb.png"
                alt=""
                width={50}
                className="service-hover  box3-pic"
              />
            </span>
            <span>
              <img
                src="./assets/images/express.png"
                alt=""
                width={45}
                className="service-hover  box3-pic"
              />
            </span>
          </div>
          <div className="box-3-head service-hover">
            <span>Backend Development </span>
          </div>
          <div className="box-para">
            <p>
              Combining Node.js with Express and MongoDB offers a potent stack
              for developing full-stack JavaScript applications, where the
              backend seamlessly integrates with the frontend for a cohesive and
              efficient web development experience.
            </p>
          </div>
        </div>
      </div>
      <Expertise />
    </>
  );
}
