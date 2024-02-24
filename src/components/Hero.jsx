import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
import "../UI/index.css";
import cv from "../images/cv.pdf";
import { motion, useAnimation, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView){
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
 
    <>
      <div className="hero_container">
        <div ref={ref} className="container_content">

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className=" hero-content"
          >
            <h1>Hey There!</h1>
            <h1>I'm <span>Aravinthan</span></h1>
            <h1>Based In Chennai</h1>
          </motion.div>
          <ul>
            <li>Fullstack Developer</li>
            <li>Web Designer</li>
            <li>UI/UX Designer</li>
          </ul>

          {/* Updated button with download attribute */}
          <a href={cv} download>
            {" "}
            <button id="btn">DOWNLOAD CV</button>
          </a>
        </div>
      </div>
      <a href="#about" className="down">
        <span className="down-one"></span>
        <span className="down-two">About Me</span>
        <span className="down-three"></span>
      </a>
    </>
  );
};

export default Hero;
