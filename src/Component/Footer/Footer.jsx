import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="ftco-footer ftco-section p-5 bg-dark app-foot">
        <div className="container">
          <div className="row">
            <div className="mouse">
              <a href="#" className="mouse-icon">
                <div className="mouse-wheel">
                  <span className="ion-ios-arrow-up"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Krishna Verma</h2>
                <p>
                  As a fervent pursuer of knowledge and a B.Tech Computer
                  Science student. With a profound
                  interest in MERN stack development, I am equipped with the
                  skills to transform ideas into robust, scalable, and dynamic
                  web applications.
                </p>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Projects</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="py-2 d-block a-foot">
                      NewsApp
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block a-foot">
                      Chatapp
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block a-foot">
                      Quiz App
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block a-foot">
                      Blood bank app
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block a-foot">
                      CRUD
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Contacts</h2>
                <div className="d-flex">
                  <ul className="list-unstyled mr-l-5 pr-l-3 mr-4 ">
                    <li>
                      <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=krishnaverma4203@gmail.com" className="py-2 d-block a-foot style-list">
                        Email
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Verma-Krishna" className="py-2 d-block a-foot style-list">
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/krishna-verma-62b188210/" className="py-2 d-block a-foot style-list">
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">Anand Engineering college</span>
                    </li>
                    <li>
                      <a href="#" className="a-foot">
                        <span className="icon icon-envelope "></span>
                        <span className="text">krishnaverma4203@gmail.com</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="a-foot">
                        <span className="icon icon-phone "></span>
                        <span className="text">6399284203</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
