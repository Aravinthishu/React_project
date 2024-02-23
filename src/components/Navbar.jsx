import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbBrandVscode } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import "./navbar.css";

import { motion } from "framer-motion";

const slideUpVariants1 = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 5 },
};
const slideUpVariants2 = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 5 },
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="head_container">
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <h1>ARAVINTH</h1>
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#service">Service</a>
          </li>
          <li className="p__opensans">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="app__navbar-login">
          <a
            href="https://api.whatsapp.com/send?phone=6369721094"
            target="_blank"
            rel="noopener noreferrer"
            className="p__opensans fa"
          >
            <FaWhatsapp />
          </a>
          <div />
          <a
            href="https://www.instagram.com/naanum_rowdy_thaaa?utm_source=qr&igsh=MWplN3FwZDJ6bnozMw== "
            target="_blank"
            rel="noopener noreferrer"
            className="p__opensans fa"
          >
            <FaInstagram />
          </a>
          <div />
          <a
            href="https://www.linkedin.com/in/aravinth-sedhuraman-2407ba271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
            className="p__opensans fa"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            className="overlay__open"
            font-size={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">
              <TbBrandVscode
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <motion.div
                  variants={slideUpVariants1}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1 }}
                >
                  <li className="p__opensans">
                    <a href="#home">Home</a>
                  </li>
                </motion.div>

                <motion.div
                  variants={slideUpVariants2}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1 }}
                >
                  <li className="p__opensans">
                    <a href="#about">About</a>
                  </li>
                </motion.div>
                <motion.div
                  variants={slideUpVariants1}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1 }}
                >
                  <li className="p__opensans">
                    <a href="#menu">Service</a>
                  </li>
                </motion.div>
                <motion.div
                  variants={slideUpVariants2}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1 }}
                >
                  <li className="p__opensans">
                    <a href="#awards">Portfolio</a>
                  </li>
                </motion.div>

                <motion.div
                  variants={slideUpVariants1}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1 }}
                >
                  <li className="p__opensans">
                    <a href="#contact">Contact</a>
                  </li>
                </motion.div>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
