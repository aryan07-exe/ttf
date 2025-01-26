import React, { useState } from 'react';
import './HeroSlider.css';
import mainImage from '../images/taj.jpg';
import accent1 from '../images/adv1.jpg';
import accent2 from '../images/adv2.jpg';
import ExploreForm from './ExploreForm';

const HeroSlider = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="hero-modern">
      <div className="hero-content">
        <div className="text-section">
          <div className="title-container">
            {/* <span className="subtitle">Welcome to TTF Holidays</span> */}
            <h1 className="main-title">
              <span className="title-line">Discover</span>
              <span className="title-line">Your Next</span>
              <span className="title-line">Adventure</span>
            </h1>
          </div>
          <p className="hero-description">
            Embark on a journey of a lifetime with our curated travel experiences
          </p>
          <div className="cta-container">
            <button 
              className="cta-primary"
              onClick={() => setIsFormOpen(true)}
            >
              Start Exploring
            </button>
            <button className="cta-secondary">View Packages</button>
          </div>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Destinations</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Travelers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="visual-section">
          <div className="image-mosaic">
            <div className="main-image-wrapper">
              <img src={mainImage} alt="Main destination" className="main-image" />
            </div>
            <div className="accent-images">
              <div className="accent-image-wrapper top">
                <img src={accent1} alt="Accent 1" className="accent-image" />
              </div>
              <div className="accent-image-wrapper bottom">
                <img src={accent2} alt="Accent 2" className="accent-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExploreForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </div>
  );
};

export default HeroSlider; 