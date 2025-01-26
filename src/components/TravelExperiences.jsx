import React, { useState } from 'react';
import './TravelExperiences.css';
import ExploreForm from './ExploreForm';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    text: "Excellent experience! I was really impressed by the user-friendly interface and the attention to detail. This is by far the best platform I’ve used.",
    tourType: "Cultural Tour",
    date: "October 2023"
  },
  {
    name: "John Doe",
    location: "Singapore",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    text: "Absolutely amazing! The service exceeded my expectations. The team was professional, responsive, and delivered exactly what I needed. Highly recommend!",
    tourType: "Luxury Package",
    date: "September 2023"
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    text: "Very good overall. There’s a slight scope for improvement, but I’m really happy with the product. Customer support was excellent!",
    tourType: "Luxury Package",
    date: "September 2023"
  },
  {
    name: "Emma Davis",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    text: "The wildlife safari was incredible! We saw all the Big Five and the accommodations were top-notch.",
    tourType: "Wildlife Safari",
    date: "November 2023"
  }
];

const TravelExperiences = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="testimonials-section" className="testimonials-section">
      <div className="testimonials-header">
        
        <h2 className="testimonials-title">What Our Travelers Say</h2>
        <p className="testimonials-description">
          Real experiences from our valued customers who have explored the world with us
        </p>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-scroll">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">
                <div className="testimonial-profile">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="testimonial-image"
                  />
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-location">{testimonial.location}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-footer">
                  <span className="tour-type">{testimonial.tourType}</span>
                  <span className="testimonial-date">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-cta">
        <p className="cta-text">Ready to create your own travel story?</p>
        <button 
          className="cta-button"
          onClick={() => setIsFormOpen(true)}
        >
          Start Planning Today
        </button>
      </div>

      <ExploreForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </section>
  );
};

export default TravelExperiences; 