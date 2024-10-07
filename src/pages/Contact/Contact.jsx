import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d5vlpvp', 'template_fl87rs9', e.target, '5ZDonEthaeNa_xSO9')
      .then((result) => {
        console.log(result.text);
        setFormMessage('Form submitted successfully');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        console.error('Error occurred during form submission:', error);
        setFormMessage('An unexpected error occurred. Please try again later.');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="head">

        <h3>Get In Touch</h3>
        <h2>CONTACT ME</h2>
        <span className="line2"></span>

      </div>
      <div className="contact_overlay"></div>
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
                  <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea placeholder="Your Message Here" name="message" value={formData.message} onChange={handleChange} required ></textarea>
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
