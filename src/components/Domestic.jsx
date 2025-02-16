import React, { useState } from "react";
import "./Domestic.css";
// Import images
import nan from "../images/nanital.jpg";
import si from "../images/si.jpg";
import south from "../images/k3.jpg";
import hp from "../images/hp.jpg";
import ladakh from "../images/k1.jpg";
import goa from "../images/goa3.jpg";
import kash from "../images/kash1.jpg";
import ExploreForm from './ExploreForm';

const DomesticDestinations = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const destinations = [
    {
      id: 1,
      image: goa,
      name: "Goa",
      description: "The Entertainment Capital of the World",
      price: "From 8999 rs",
      rating: 4.8,
    },
    {
      id: 1,
      image: kash,
      name: "Kashmir",
    
      price: "From 6999 rs",
      rating: 4.8,
    },
    
    {
      id: 1,
      image: nan,
      name: "Nainital",
      
      price: "From 6999 rs",
      rating: 4.8,
    },
    {
      id: 2,
      image: hp,
      name: "Himachal",
     
      price: "From 9,999 rs",
      rating: 4.6,
    },
    {
      id: 3,
      image: south,
      name: "Andaman",

      price: "From 15,999 rs",
      rating: 4.9,
    },
    {
      id: 4,
      image: ladakh,
      name: "Ladakh",
      
      price: "From 11,999 rs",
      rating: 4.7,
    },
 
  ];

  return (
    <section id="domestic-section" className="domestic-section">
      <div className="container-alt">
        <div className="header-content">
          <h2 className="title-alt">Discover Domestic Places</h2>
          <div className="title-decoration"></div>
        </div>

        <div className="destinations-wrapper">
          <div className="destinations-scroll-container">
            {destinations.map((destination) => (
              <div key={destination.id} className="destination-item">
                <div className="destination-image-wrapper">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="destination-img"
                  />
                  <div className="price-tag">{destination.price}</div>
                </div>
                <div className="destination-info">
                  <h3 className="destination-title">{destination.name}</h3>
                  <p className="destination-subtitle">{destination.description}</p>
                  <div className="destination-footer">
                    <div className="rating-box">
                      <span className="rating-number">{destination.rating}</span>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={`star-icon ${
                              index < Math.floor(destination.rating)
                                ? "filled"
                                : "empty"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <button 
                      className="explore-btn" 
                      onClick={() => setIsFormOpen(true)}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="view-more-btn">
          View More Destinations
          <span className="arrow-icon">→</span>
        </button>
      </div>

      <ExploreForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </section>
  );
};


export default DomesticDestinations; 
