import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerData = {
    contact: {
      phone: "+91 8287334507",
      email: "ttfholidays@gmail.com",
      address: "Dwarka, New Delhi, India"
    },
    quickLinks: [
      { title: "Domestic Destinations", path: "#domestic-section" },
      { title: "International Destinations", path: "#international-section" },
      { title: "Experiences", path: "#testimonials-section" },
      { title: "Contact", path: "#contact-section" }
    ],
    services: [
      "Customized Tours",
      "Luxury Travel",
      "Adventure Tours",
      "Pilgrimage Tours"
    ]
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (path, e) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const sectionId = path.substring(1);
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand-section">
          <h2>TTF Holidays</h2>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt />
              <span>{footerData.contact.phone}</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>{footerData.contact.email}</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-section links-section">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  {link.path.startsWith('/') ? (
                    <Link 
                      to={link.path} 
                      className="nav-link"
                      onClick={(e) => handleNavigation(link.path, e)}
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <a 
                      href={link.path} 
                      className="nav-link"
                      onClick={(e) => handleNavigation(link.path, e)}
                    >
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="services">
            <h3>Our Services</h3>
            <ul>
              {footerData.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} TTF Holidays. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy</Link>
          <span className="separator">•</span>
          <Link to="/terms">Terms</Link>
          <span className="separator">•</span>
          <Link to="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;