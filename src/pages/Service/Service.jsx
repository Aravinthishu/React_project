import React from 'react';
import './service.css';
import { service } from '../../UI/data';

const Service = () => {
  return (
    <section id="service">
      <div className="head">
        <h3>What Love I Do</h3>
        <h2>MY SERVICES</h2>
        <span className="line2"></span>
      </div>
  <div className="service-container">
   
        {service.map((item) => (
          <div key={item.id} className="services-item">
            <div className="icon-services">
              <span><i className={`icon ${item.icon}`}></i></span>
            </div>
            <h4>{item.title}</h4>
            <hr />
            <p>{item.service}</p>
            <span className="number-bg">0{item.id}</span>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Service;
