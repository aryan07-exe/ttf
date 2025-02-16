import React, { useState } from 'react';
import './AdventurePackages.css';
import trekking from '../images/adv1.jpg';
import rafting from '../images/tiverrafting.avif';
import camping from '../images/desert2.avif';
import safari from '../images/wildlife.avif';
import ExploreForm from './ExploreForm';

const packages = [
  {
    id: 1,
    title: "Mountain Trekking",
    location: "Himalayas, India",
    image: trekking,
    duration: "7 Days",
    difficulty: "Moderate",
    price: "₹29,999",
    highlights: [
      "Professional Guide",
      "Camping Equipment",
      "Meals Included",
      "Safety Gear"
    ]
  },
  {
    id: 2,
    title: "River Rafting",
    location: "Rishikesh, India",
    image: rafting,
    duration: "2 Days",
    difficulty: "Challenging",
    price: "₹8,999",
    highlights: [
      "Expert Instructors",
      "Safety Equipment",
      "Riverside Camping",
      "BBQ Dinner"
    ]
  },
  {
    id: 3,
    title: "Desert Camping",
    location: "Jaisalmer, India",
    image: camping,
    duration: "3 Days",
    difficulty: "Easy",
    price: "₹12,999",
    highlights: [
      "Luxury Tents",
      "Camel Safari",
      "Cultural Shows",
      "Desert Activities"
    ]
  },
  {
    id: 4,
    title: "Wildlife Safari",
    location: "Jim Corbett, India",
    image: safari,
    duration: "4 Days",
    difficulty: "Easy",
    price: "₹19,999",
    highlights: [
      "Jeep Safari",
      "Resort Stay",
      "Nature Walks",
      "Wildlife Guide"
    ]
  }
];

const AdventurePackages = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="adventure-section">
      <div className="adventure-header">
        <h2 className="adventure-title">Adventure Packages</h2>
        <p className="adventure-subtitle">Discover Thrilling Experiences</p>
      </div>

      <div className="packages-container">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <div className="package-image-wrapper">
              <img src={pkg.image} alt={pkg.title} className="package-image" />
              <div className="package-price">{pkg.price}</div>
              <div className="package-duration">{pkg.duration}</div>
            </div>
            
            <div className="package-content">
              <div className="package-info">
                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-location">{pkg.location}</p>
              </div>

              <div className="package-details">
                <div className="difficulty-badge" data-difficulty={pkg.difficulty}>
                  {pkg.difficulty}
                </div>
                <ul className="highlights-list">
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <button 
                className="book-package-btn"
                onClick={() => setIsFormOpen(true)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <ExploreForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </section>
  );
};

export default AdventurePackages; 