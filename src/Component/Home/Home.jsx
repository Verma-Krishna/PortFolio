import React, { useEffect, useRef } from "react";
import "./Home.css";
import About from "../About/About";
import Typed from "typed.js";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "MERN Stack developer",
        "Problem Solver",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 100,
    });
    return () => {
      typed.destroy();
    };

    // Destropying
  }, []);

  return (
    <>
      <div className="Home">
        <div className="personal-data">
          <div className="para typing-effect">
            <p className="para-p" style={{marginLeft:"50px"}}>Hi, Iam</p>
            <p className="para-p home-para-hover">Krishna Verma</p>
            <p className="para-p typing-text">
              And I am <span ref={el} style={{ fontWeight: "bolder"}}></span>
            </p>
            <p className="para-p">
              Welcome to my digital domain, where the intersection of passion
              and technology sparks innovation! I am <span>Krishna Verma</span> a B.Tech
              Computer Science enthusiast with a flair for MERN (MongoDB,
              Express.js, React.js, Node.js) stack development. Embarking on
              this exhilarating journey, I am on a mission to weave seamless
              digital experiences and carve my niche in the ever-evolving world
              of technology.
            </p>
          </div>
          <div className="social-icons">
            <span className="hero-icon">
              <Link to={"https://github.com/Verma-Krishna"}>
                <img
                  src={"/assets/images/github.png"}
                  className="home-hover"
                  alt=""
                />
              </Link>
            </span>

            <span className="hero-icon">
              <Link to={"https://www.linkedin.com/in/krishna-verma-62b188210/"}>
                <img
                  src={"/assets/images/linkedin.png"}
                  className="home-hover"
                  alt=""
                />
              </Link>
            </span>
            <span className="hero-icon">
              <Link to={"https://www.instagram.com/krishna_verma38/"}>
                <img
                  src={"/assets/images/instagram.png"}
                  className="home-hover"
                  alt=""
                />
              </Link>
            </span>
            <span className="hero-icon">
              <Link
                to={"https://www.facebook.com/profile.php?id=100079318232355"}
              >
                <img
                  src={"/assets/images/facebook.png"}
                  className="home-hover"
                  alt=""
                />
              </Link>
            </span>
          </div>
          <div className="hire-btn">
            <button
              type="submit"
              className="btn btn-large btn-warning home-hover"
            >
              <Link to={"https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=krishnaverma4203@gmail.com"} style={{textDecoration:"none",color:"white",fontFamily:"Poppins, sans-serif"}}>Hire Me!</Link>
            </button>
          </div>
        </div>
        <div className="hero-section">
          <img src={"./assets/images/Krishna_Verma_pic.jpeg"} alt="" />
        </div>
      </div>

      <About />
    </>
  );
};

export default Home;
