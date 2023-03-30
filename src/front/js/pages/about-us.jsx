import React from "react";
import logo from "../../img/logo.webp";

export const AboutUs = () => (
  <div className="about-us-container d-flex justify-content-center flex-wrap">
    <div className="card card-about-us" id="card-1">
      <div className="img-avatar">
        <img src={logo} className="nav-logo-about" viewBox="0 0 100 100" />
      </div>
      <div className="card-text">
        <div className="front page" id="lucy" />
        <div className="title-total">
          <div className="title">
            <a
              href="mailto:lucy.mutuota@gmail.com"
              className="title title-total"
            >
              lucy.mutuota@gmail.com
            </a>
          </div>
          <h2 className="name-profile">Lucy Mutuota, Fullstack Developer</h2>
          <div className="desc" />
          <div className="actions d-flex flex-row justify-content-around">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/lucymell"
            >
              <button className="links-profile">
                <i className="fab fa-github" />
              </button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/lucymutuota/"
            >
              <button className="links-profile">
                <i className="fab fa-linkedin" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
