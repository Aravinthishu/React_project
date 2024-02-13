import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Handle successful form submission
        setFormMessage('Form submitted successfully');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // Handle error
        setFormMessage('Error submitting form');
      }
    } catch (error) {
      // Handle error
      setFormMessage('Error: ' + error.message);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="head">
        <h3>Get In Touch</h3>
        <h2>CONTACT ME</h2>
        <span className="line2"></span>  
      </div>
      <div className="overlay"></div>
      <div className="contact-container">
        
        <div className="row">
          <div className="contact-content-1">
            {/* Contact details */}
          </div>

          {/* Contact Form */}
          <div className="contact-content-2">
            {formMessage && <p className={formMessage.includes('success') ? 'success-message' : 'error-message'}>{formMessage}</p>}
            <form className="form" onSubmit={handleSubmit}>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                </div>
              </div>  
              <div className="col-md-12">
                <div className="form-group">
                  <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea placeholder="Your Message Here" name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
              </div>
              <button type="submit" value="send message" className="btn-one">HIRE ME</button>
            </form> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
