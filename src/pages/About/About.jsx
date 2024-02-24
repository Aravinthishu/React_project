
import './about.css'
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
//React Icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();


  useEffect(() => {
    if (isInView){
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section id="about">
    <div class="container_about">
    <div class="about-img">
    
      <div class="squre"></div>
      <div class="squre-img"></div>
     
    </div>

    <div ref={ref} class="about-content">
    <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
      <span class="line1"></span> <span class="name">I'm Aravinthan</span>
      <h2>I am a proficient web developer specializing in React and Python, currently based in Chennai.</h2>
        <p>
            Greetings! I'm a web developer hailing from Chennai, specializing in React and Python. With a knack for crafting seamless user experiences, I blend my design skills with coding expertise.
             From front-end finesse to diving into backend complexities, I bring versatility to projects. </p>
        
        <p>Proficient in Figma, I enjoy translating ideas into visually appealing and functional applications. Let's collaborate and turn concepts into compelling digital realities!</p>
        <div class="myself">
          <li>Name : Aravinthan</li>
          <li>Age : 21</li>
          <li>Phone : +91 6369721094</li>
          <li>Email : aravintharavinth7746@gamil.com</li>
          <li>Address : Chennai</li>
          <li>Nationality : Indian</li>
        </div>
        <div class="about-social">
        
          <ul>
           <span class="follow">Follow Me :</span>
           <span class="line"></span>  
            <li><a href="https://www.linkedin.com/in/aravinth-sedhuraman-2407ba271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className='p__opensans fa' target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
            <li><a href="https://www.instagram.com/naanum_rowdy_thaaa?utm_source=qr&igsh=MWplN3FwZDJ6bnozMw== " target="_blank" className='p__opensans fa' rel="noopener noreferrer"><FaInstagram /></a></li>
            <li> <a href="https://api.whatsapp.com/send?phone=6369721094" target="_blank" rel="noopener noreferrer" className='p__opensans fa'><FaWhatsapp /></a></li>
          </ul>
        </div>
        </motion.div>
    </div>
    </div>
   </section>
  )
}

export default About
