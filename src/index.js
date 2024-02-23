import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./UI/App";

function SmoothScrollAnchorLinks() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return null; // This component doesn't render anything visible
}

ReactDOM.render(
  <React.StrictMode>
    <SmoothScrollAnchorLinks />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

