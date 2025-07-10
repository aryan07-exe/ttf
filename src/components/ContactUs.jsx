import React from 'react';
import './ContactUs.css';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  const contactInfo = {
    phone: "+91 8287334507",
    whatsapp: "+91 8287334507",
    email: "ttfholidays@gmail.com",
    instagram: "ttf_holidays"
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Get in touch with us</p>
      </div>

      <div className="contact-methods">
        <a 
          href={`tel:${contactInfo.phone}`}
          className="contact-method phone"
        >
          <FaPhone className="contact-icon" />
          <div className="method-details">
            <span className="method-label">Call Us</span>
            <span className="method-value">{contactInfo.phone}</span>
          </div>
        </a>

        <a 
          href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-method whatsapp"
        >
          <FaWhatsapp className="contact-icon" />
          <div className="method-details">
            <span className="method-label">WhatsApp</span>
            <span className="method-value">Chat with us</span>
          </div>
        </a>

        <a 
          href={`mailto:${contactInfo.email}`}
          className="contact-method email"
        >
          <FaEnvelope className="contact-icon" />
          <div className="method-details">
            <span className="method-label">Email Us</span>
            <span className="method-value">{contactInfo.email}</span>
          </div>
        </a>

        <a 
          href={`https://instagram.com/${contactInfo.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-method instagram"
        >
          <FaInstagram className="contact-icon" />
          <div className="method-details">
            <span className="method-label">Instagram</span>
            <span className="method-value">@{contactInfo.instagram}</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactUs; 