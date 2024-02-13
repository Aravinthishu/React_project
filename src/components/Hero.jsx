import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hero.css';
import '../UI/index.css'
import cv from '../images/cv.pdf';

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="container_content">
        <div className=" hero-content">
          <h1>
            Hey There!<br />
            I'm <span>Aravinthan</span><br />
            Based In Chennai
          </h1>
          <ul>
            <li>Fullstack Developer</li>
            <li>Web Designer</li>
            <li>UI/UX Designer</li>
          </ul>
          {/* Updated button with download attribute */}
          <a href={cv} download> <button id="btn">DOWNLOAD CV</button></a>
        </div>
      </div>
      <a href="#about" className="down">
        <span className="down-one"></span>
        <span className="down-two">About Me</span>
        <span className="down-three"></span>         
      </a>
    </div>
  );
};

export default Hero;
