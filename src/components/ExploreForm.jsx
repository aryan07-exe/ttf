import React, { useState } from 'react';
import './ExploreForm.css';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ExploreForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        to_name: "TTF Holidays",
        from_name: formData.name,
        reply_to: formData.email,
        phone_number: formData.phone,
        destination: formData.destination,
        travel_date: formData.travelDate,
        message: formData.message,
      };

      const result = await emailjs.send(
        'service_vppx73t',
        'template_poeo4nf',
        templateParams,
        'wWdbz_ObusfHueH25'
      );

      if (result.text === 'OK') {
        setShowSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: '',
          travelDate: '',
          message: ''
        });
        // Close form after 2 seconds
        setTimeout(() => {
          onClose();
          setShowSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send inquiry. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="form-overlay">
      <div className="form-container">
        <button className="close-form" onClick={onClose}>
          <FaTimes />
        </button>
        
        {showSuccess ? (
          <div className="success-message">
            <FaCheckCircle />
            <span>Thank you! Your inquiry has been sent successfully.</span>
          </div>
        ) : (
          <>
            <h2>Start Your Journey</h2>
            <p>Fill in your details and we'll get back to you shortly</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="destination"
                  placeholder="Preferred Destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="date"
                  name="travelDate"
                  placeholder="Preferred Travel Date"
                  value={formData.travelDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Additional Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ExploreForm; 