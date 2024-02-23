import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hero.css';
import '../UI/index.css'
import cv from '../images/cv.pdf';
import { motion } from 'framer-motion';


const slideUpVariants1 = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 5 }
};
const slideUpVariants2 = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 5 }
};



const Hero = () => {
  return (
 
    <div className="hero_container">
      <div className="container_content">

        <div className=" hero-content">
        <motion.div
      variants={slideUpVariants1}
      initial='hidden'
      animate='visible'
      transition={{ duration: 1 }}
    >
          <h1>
            Hey There!<br />
            I'm <span>Aravinthan</span><br />
            Based In Chennai
          </h1>
          </motion.div>
          <motion.div
      variants={slideUpVariants2}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.5 }}
    >
          <ul>
            <li>Fullstack Developer</li>
            <li>Web Designer</li>
            <li>UI/UX Designer</li>
          </ul>
          </motion.div>
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
