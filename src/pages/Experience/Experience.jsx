import React from 'react';
import './experience.css'; // Ensure that the correct path is used for your styles
import { MyExperience } from '../../UI/data';
import cv from '../../images/cv.pdf';

const Experience = () => {
  return (
    <section id="experience" className="resume">
      <div className="head">
        <h3>Design & Code</h3>
        <h2>EDUCATION & EXPERIENCE</h2>
        <span className="line2"></span>
      </div>

      <div className="container">
        <div className="row">


          <div className="column1">
            <div className="my-resume">

              {MyExperience.map((experience) => (
                <div key={experience.id} className='resume-content'>
                                    <div className="history-top">
                  {experience.date}
                </div>
                <div className="resume-item">
                  <div className="resume-head">
                    <span className="icon-exp">{experience.icon}</span>
                    <div className="content-exper">
                      <h4>{experience.title}</h4>
                      <div className="history">{experience.place}</div>
                      <div className="history">{experience.rank}</div>
                    </div>
                  </div>

                  {experience.path && (
                    <div className="resume-footer">
                      <p>{experience.info}</p>
                    </div>
                  )}

                     {experience.image && (
                     <div className="img-resume">
                        <img
                  src={experience.image}
                     alt={`my-history-${experience.id}`}
                 />
                          </div>
                     )}
                </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>
       <div className="resume-btn2">
       <a href={cv} download> <button id="btn">DOWNLOAD CV</button></a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
