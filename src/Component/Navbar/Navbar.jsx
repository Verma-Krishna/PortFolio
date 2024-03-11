import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <ul className="head-nav sticky-top">
        <div className="logo nav-hover">
          <li>Krishna Verma</li>
        </div>
        <div className="cont-logo">
          <li>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=krishnaverma4203@gmail.com"
              className=""
            >
              krishnaverma4203@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/Verma-Krishna" className="">
              https://github.com/Verma-Krishna
            </a>
          </li>
        </div>
      </ul>
    </>
  );
}
