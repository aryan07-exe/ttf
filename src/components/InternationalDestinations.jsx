import React, { useState } from "react";
import "./InternationalDestinations.css";
import mor from "../images/morocco1.jpg";
import bali from "../images/bali2.jpg";
import thailand from "../images/thailand1.jpg";
import maldivesImg from "../images/turkey2.jpg";
import turkey from "../images/turkey1.jpg";
import japan from "../images/japan3.jpg";
import ExploreForm from "./ExploreForm";

const InternationalDestinations = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const destinations = [
    {
      id: 1,
      image: turkey,
      name: "Turkey",
     
      price: "From $599",
      rating: 4.9,
    },
    {
      id: 1,
      image: japan,
      name: "Japan",
      
      price: "From $2988",
      rating: 4.9,
    },
    
    {
      id: 2,
      image: mor,
      name: "Morocco",
    
      price: "From $799",
      rating: 4.8,
    },
    {
      id: 3,
      image: bali,
      name: "Bali",
     
      price: "From $998",
      rating: 4.7,
    },
    {
      id: 4,
      image: thailand,
      name: "Thailand",

      price: "From $499",
      rating: 5.0,
    }
  ];

  return (
    <section id="international-section" className="international-section">
      <div className="container-int">
        <div className="header-content">
          <h2 className="title-int">International Destinations</h2>
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

export default InternationalDestinations; 