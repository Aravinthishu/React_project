import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import gallery01 from "../../images/Portfolio_7.jpg";
import gallery02 from "../../images/MAIN.png";
import gallery03 from "../../images/portfolio_3.jpg";
import gallery04 from "../../images/Chat_mockup_2.png";
import gallery05 from "../../images/portfolio_5.png";

import "./gallery.css";

const Gallery = () => {
  const imageLinks = [
    "https://gym-frontend-self.vercel.app/",
    "https://photography-tawny-mu.vercel.app/portfolio",
    "https://aravinth.pythonanywhere.com/add-expense",
    "https://chat-point-2nkg.onrender.com/",
    "https://www.figma.com/proto/2Rw7G0PPW0hy8BclM7N5WZ?node-id=0-1&t=Lfk0N2VPlhf6Zywp-6",
,
  ];

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const handleImageClick = (event, imageIndex) => {
    event.preventDefault();
    window.open(imageLinks[imageIndex], "_blank");
  };

  return (
    <section id="portfolio" className="section-portfolio">
      <div className="portfolio-head">
        <h3>Design & Code</h3>
        <h2>MY PORTFOLIO</h2>
        <span className="line2"></span>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Explore my portfolio, a blend of creative design and precise coding
          expertise, showcasing innovative projects crafted with passion and
          precision.
        </p>
      </div>

      <div className="app__gallery">
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[gallery05, gallery02, gallery01, gallery04, gallery03].map(
              (image, index) => (
                <a
                  key={`gallery_image-${index + 1}`}
                  href={imageLinks[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app__gallery-images_card flex__center"
                  onClick={(event) => handleImageClick(event, index)}
                >
                  <img src={image} alt={`gallery_image_${index}`} />
                </a>
              )
            )}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
