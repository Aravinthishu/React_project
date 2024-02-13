import React from 'react';
import gallery01 from '../../images/portfolio_1.png';
import gallery02 from '../../images/portfolio_2.png';
import gallery03 from '../../images/portfolio_3.jpg';
import gallery04 from '../../images/portfolio_4.png';
import gallery05 from '../../images/portfolio_5.png';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (

    <section id="portfolio" className="section-portfolio">
    <div className="portfolio-head">
      <h3>Design & Code</h3>
      <h2>MY PORTFOLIO</h2>
      <span className="line2"></span>
      <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Explore my portfolio, a blend of creative design and precise coding expertise, showcasing innovative
       projects crafted with passion and precision.</p>
    </div>

    <div className="app__gallery ">
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[gallery01, gallery02, gallery03, gallery04,gallery05].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Gallery;
