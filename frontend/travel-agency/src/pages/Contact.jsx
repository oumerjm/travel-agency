import React, { useState } from 'react';
// Import your custom CSS file here
import './Contact.css'; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Triggers the alert message with the user's name
    alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
    // Optional: Reset form after submit
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-hero-section">
      <div className="contact-overlay"></div>
      
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>

        <div className="contact-content">
          {/* Left Column: Form */}
          <div className="form-column">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
              <textarea 
                placeholder="Your Message" 
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className="info-column">
            <h2>Contact Information</h2>
            <div className="info-item">
              <span className="icon">📞</span>
              <p>+251976567890</p>
            </div>
            <div className="info-item">
              <span className="icon">✉️</span>
              <p>atgotravel@gmail.com</p>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <p>Bole, TK bldg, 3rd floor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;