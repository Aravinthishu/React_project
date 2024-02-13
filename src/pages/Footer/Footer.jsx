import React from 'react';
import './footer.css';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="social">

        <a href="https://www.linkedin.com/in/aravinth-sedhuraman-2407ba271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className='p__opensans fa' target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
    
        <a href="https://api.whatsapp.com/send?phone=6369721094" target="_blank" rel="noopener noreferrer" className='p__opensans fa'><FaWhatsapp /></a>
        
        <a href="https://www.instagram.com/naanum_rowdy_thaaa?utm_source=qr&igsh=MWplN3FwZDJ6bnozMw== " target="_blank" className='p__opensans fa' rel="noopener noreferrer"><FaInstagram /></a>
       
        </div>
        <div className="copyright">
        <p>&copy; 2024 Aravinthan. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer